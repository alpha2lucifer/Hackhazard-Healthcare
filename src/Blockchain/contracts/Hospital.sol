// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;
pragma experimental ABIEncoderV2;


contract Hospital_Contract_Hack_JMI {


    // Hospital struct
    struct Hospital {
        //To login into the account
        string username;
        string hospital_name;
        string registraion_number; //to check authenticity
        string departments;
        address hospital_address;
      
        string license_number;
        // Hospital_Contact_Info contact;  //contact info to connect with hospital
    }

    //creating hospital array to ustore hospitals registered
     mapping(address => Hospital) hospitals;
    
    mapping(address => bool) public isRegistered;

    address[] public hospital_addresses ; //creating hospital_key array to iterate through it
    Hospital[] public hospital_list;

    // Defining event to add hospital on blockchain
    event Hospital_Added(
        address indexed hospital_address,
        string username,
        string hospital_name,
        string registration_number,
        string departments,
        string license_number
    );

    //Adding Hospital
    function Add_Hospital(
        string memory _username,
        string memory _hospital_name,
        string memory _registration_number,
        string memory _departments,
        string memory _license_number
    ) public returns(address) {
        // Required Condition
        require(bytes(_hospital_name).length > 0, "Name should not be empty");
        // require(hospital_exist(msg.sender) == false,"Hospital already exist");
        



        hospitals[msg.sender] = Hospital({
            username:_username,
            hospital_name: _hospital_name,
            registraion_number: _registration_number,
            departments:_departments,
            license_number: _license_number,
            hospital_address:msg.sender
        });

        // Adding Hospital on Blockchain
        emit Hospital_Added(
            msg.sender,
            _username,
            _hospital_name,
            _registration_number,
            _departments,
            _license_number
        );

        isRegistered[msg.sender] =true;

        // // Adding adrres to array;
        hospital_addresses.push(msg.sender);

        hospital_list.push(Hospital({
            username:_username,
            hospital_name: _hospital_name,
            registraion_number: _registration_number,
            departments:_departments,
            license_number: _license_number,
            hospital_address:msg.sender
        }));

        return(msg.sender);
    }

    // get all hospital address
    function get_hospital_address() external view returns( Hospital[] memory){
        return hospital_list;
    }

    // get all hospital
    function get_hospital_list()  view public   returns( Hospital[] memory){
        require(hospital_list.length > 0 );
        return hospital_list;
    }

     // Function to retrieve hospital properties by address
    function getHospital(address hospitalAddress)  view  public returns (string memory, string memory, string memory, string memory) {
        Hospital storage hospital = hospitals[hospitalAddress];
        return (
            hospital.hospital_name,
            hospital.registraion_number,
            hospital.departments,
            hospital.license_number
        );
    }



    // check whether hospital alreadyexist or not
    function hospital_exist(address _hospital_addresses) view  public  returns(bool) {
        if(hospital_addresses.length==0) return true;
        for (uint i = 0; i < hospital_addresses.length; i++) {
            if (hospital_addresses[i] == _hospital_addresses) {
                return false; //hopital key Exist
            }
        }
        return true; //hopital key does not exist
    
    }

   


    // check Hopital key
    function check_hospital_key(
        address _hospital_address
    ) public view returns (bool) {
        


        for (uint i = 0; i < hospital_addresses.length; i++) {
            if (hospital_addresses[i] == _hospital_address) {
                return true; //hopital key Exist
            }
        }
        return false; //hopital key does not exist
    }

    // To check whether departemnt exist or not
    // function check_departments(
    //     string memory _department,
    //     address _hospital_address
    // ) public view returns (bool) {
    //     require(bytes(_department).length > 0, "Please Enter the department");

    //     //  creating an hospital instance
    //     Hospital memory _hospital = hospitals[_hospital_address];

    //     //  checking whether department exist or not
    //     for (uint i = 0; i < _hospital.departments.length; i++) {
    //         if (
    //             keccak256(bytes(_hospital.departments[i])) ==
    //             keccak256(bytes(_department))
    //         ) {
    //             return true; //department exist
    //         }
    //     }
    //     return false; //department does not exist
    // }

    // check whether patient exist or not
    function Patients_exist(
        string memory _patient_name
    ) public view returns (bool) {
        //  checking whether patient   exist or not
        for (uint i = 0; i < patients_list.length; i++) {
            Patients memory _patient = patients_list[i];
            if (
                keccak256(bytes(_patient.name)) ==
                keccak256(bytes(_patient_name))
            ) {
                return true; //patient exist
            }
        }
        return false; //patient does not exist
    }

   




    // Creation of Block

    struct Blocks {
        address patient_address;
        string CID_Key;
        string patient_name;
    }

    mapping(address => Blocks) public blocks;

    Blocks[] public blocks_list;

    event CreateBlock(
        address indexed block_address,
        string CID_key,
        string patient_name

    );

    function createblock(
        address _patient_address,
        string memory _CID_key,
        string memory _patient_name
    ) public {
      require(bytes(_CID_key).length > 0 , "Please upload files");

      blocks[msg.sender] = Blocks({
        patient_address:_patient_address,
        CID_Key:_CID_key,
        patient_name:_patient_name

      });

      emit CreateBlock(
      _patient_address,
      _CID_key,
      _patient_name
      );

      blocks_list.push(Blocks({
        patient_address:_patient_address,
        CID_Key:_CID_key,
        patient_name:_patient_name

      }));
    }

    // Get ipfs hash
    function get_CID_key(address _patient_address) public view returns(string memory){
        for(uint i = 0;i<blocks_list.length;i++){
            Blocks memory _block = blocks_list[i];
            if(_block.patient_address == _patient_address){
                return _block.CID_Key;
            }
        }



    }

    // Handling Doctor registraion
    struct Doctor {
        string username; // To login into the account
        string name;
        string department; // Eg. clinic, general hospital
        string id; // To check authenticity
        address hospital_address;
        // DoctorContactInfo contact;  // Contact info to connect with hospital
    }

    mapping(address => Doctor) public doctors;
   

   address[] public doctor_address;

    Doctor[] public doctor_list;
    

    event DoctorAdded(
        address indexed doctorAddress,
        string username,
        string name,
        string department,
        string id,
        address hospital_address
    );

    function addDoctor(
        string memory _username,
        string memory _name,
        string memory _department,
        string memory _id,
        address  _hospital_address
    ) public {
        require(bytes(_username).length > 0, "Username should not be empty");
        require(bytes(_name).length > 0, "Name should not be empty");
        require(bytes(_id).length > 0, "ID should not be empty");
        // require(
        //     hospital_exist(_hospital_address) == true,
        //     "Hospital Key does not match to any hospitals"
        // );
        // require(
        //     check_departments(_department, _hospital_address) == true,
        //     "Department does not exist"
        // );

 

        doctor_list.push( Doctor({
            username: _username,
            name: _name,
            department: _department,
            id: _id,
            hospital_address: _hospital_address
        }));
    

        emit DoctorAdded(
            msg.sender,
            _username,
            _name,
            _department,
            _id,
            _hospital_address
        );

        // Adding this doctor in the array
        doctor_address.push(msg.sender);
    }

    // validate Doctor
    function validate_doctor(address _doctor_address) external view returns(bool ){
        for (uint i = 0; i < doctor_address.length; i++){
            if(doctor_address[i] == _doctor_address){
                return true;
            }
        }
        return false;
        
    }

    // get all doctor
    function get_all_doctor() view public returns(Doctor[] memory){
        return doctor_list;
    }

    // Add file hash
    // function addFiles(string memory _CID_key,string memory _name) public{
    //   address  patient_address = getPatientsAddress(_name,msg.sender);

    //   createblock(patient_address,_CID_key,_name);

    // }

    
    struct Patients {
        address patient_address;
        string name;
        string phone_number;
        string alloted_departments;
        address alloted_docotors;
    }

    mapping(address => Patients) public patients;

    Patients[] public patients_list;

    event PatientsAdded(
        address indexed patientAddress,
        string name,
        string phone_number,
        string alloted_departments,
        address alloted_doctors
    );

    function Add_Patients(
        string memory _name,
        string memory _phone_number,
        string memory _alloted_departments,
        address  _alloted_doctors
    ) public {
        // require(hospital_exist(msg.sender) == true,"not a hospital");
        // require(validate_doctor(_alloted_doctors) == true,"wrong doctor");
        patients[msg.sender] = Patients({
            patient_address:msg.sender,
            name: _name,
            phone_number: _phone_number,
            alloted_departments: _alloted_departments,
            alloted_docotors: _alloted_doctors
        });

        emit PatientsAdded(
            msg.sender,
            _name,
            _phone_number,
            _alloted_departments,
            _alloted_doctors
        );

        patients_list.push(Patients({
            patient_address:msg.sender,
            name: _name,
            phone_number: _phone_number,
            alloted_departments: _alloted_departments,
            alloted_docotors: _alloted_doctors
        }));
    }

    // get patients address
    function get_patient_address(string memory name)view  public  returns(address){
        for (uint i =0;i<patients_list.length;i++){
            Patients memory _patient = patients_list[i];
            if(keccak256(bytes(_patient.name)) == keccak256(bytes(name))){
                return _patient.patient_address;
            }

        }


    }

    function get_every_patient() view public returns(Patients[] memory){
        require(patients_list.length > 0 );
        return patients_list;
    }
    

   

























































}