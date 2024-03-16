import ContractABI from "../Blockchain/build/contracts/Hospital_Contract.json";
import Web3 from "web3";
const contractAddress = "0xB64d935BF69c899bD23478e19e8b8b917c5FE99a"; // Replace with your contract address

// Hospital registration
export const handle_hospital_register = async (
  username,
  hospital_name,
  license_number,
  registration_number,
  departments,
  password
  
) => {
  try {
    // Connect to the user's Ethereum provider 
    const web3 = new Web3(window.ethereum);
    await window.ethereum.enable();

    const contract = new web3.eth.Contract(
      ContractABI.abi,
      contractAddress
    );
   const array =['dentist','gycanlogist']
    const departments_POL = [array];
    const serializedDepartments = JSON.stringify(departments)
    console.log(array[9])

    const hospital_address = await contract.methods
      .Add_Hospital(
        username,
        hospital_name,
        registration_number,
        departments,
        license_number
      )
      .send({ from: window.ethereum.selectedAddress });
      console.log(90)
      
      console.log(hospital_address);
      console.log(98)

    alert("User registered successfully!");
    return true;
  } catch (error) {
    console.error("Error registering user:", error);
    alert("Error registering user.",error);
  }
};

// get hospital list
export const get_hospital_list =async () =>{
  try {
    // Connect to the user's Ethereum provider 
    const web3 = new Web3(window.ethereum);
    await window.ethereum.enable();

    const contract = new web3.eth.Contract(
      ContractABI.abi,
      contractAddress
    );
  

    const hospital_address = await contract.methods
      .get_hospital_list(
       
      )
      .call();
      console.log(90)
      
      console.log(hospital_address);
      console.log(98)

    alert("User registered successfully!");
    return true;
  } catch (error) {
    console.error("Error registering user:", error);
  }
}



// Get department
export const get_departments= async (hospital_address) =>{
  // Connect to the user's Ethereum provider 
  const web3 = new Web3(window.ethereum);
  await window.ethereum.enable();

  

  const contract = new web3.eth.Contract(
    ContractABI.abi,
    contractAddress

  );

 
}

export const get_all_hospitals = async () =>{
  const web3 = new Web3(window.ethereum);
  await window.ethereum.enable();
  // const provider = new ethers.provider.Web3Provider(window.ethereum);
  // const signer = provider.getSigner()

  const contract = new web3.eth.Contract(
    ContractABI.abi,
    contractAddress
  );

   // Call the get_hospital_address function
   const add = await contract.methods.get_hospital_address().call();
   console.log(add);
  

}

// Doctor Reistration
export const handle_doctor_registration = async (
  username,
  name,
  id,
  hospital_address,
  department,
  password
) => {
  try {
    const web3 = new Web3(window.ethereum);
    await window.ethereum.enable();

    const contract = new web3.eth.Contract(
      ContractABI.abi,
      contractAddress
    );

    await contract.methods
      .addDoctor(username, name, department, id, hospital_address)
      .send({ from: window.ethereum.selectedAddress });

    alert("Doctor registered succesfully");
    return true;
  } catch (error) {
    alert(error);
  }
};

// get_all_doctor
export const get_all_doctors =async ( ) =>{
  try {
    const web3 = new Web3(window.ethereum);
    await window.ethereum.enable();

    const contract = new web3.eth.Contract(
      ContractABI.abi,
      contractAddress
    );

    await contract.methods
      .get_all_doctor()
      .call();

    alert("Doctor registered succesfully");
    return true;
  } catch (error) {
    alert(error);
  }
}



// Validating doctor who ask for patient vault
const validate_doctor = async (patient_name) => {
  const contract = new Web3.eth.Contract(
    ContractABI.abi,
    contractAddress
  );
}

// Patients registration
export const handle_patient_registration = async (
  name,
  phone_number,
  alloted_departments,
  alloted_doctors,
) => {
  try {
    const web3 = new Web3(window.ethereum);
    await window.ethereum.enable();

    const contract = new web3.eth.Contract(
      ContractABI.abi,
      contractAddress
    );

    await contract.methods
      .Add_Patients(
        name,
        phone_number,
        alloted_departments,
        alloted_doctors
      )
      .send({ from: window.ethereum.selectedAddress });
      get_patient_lists()

    alert("Patient registered succesfully");
    return true;
  } catch (error) {
    console.log(error);
  }
};


// getpatient list 
export const get_patient_lists =async () =>{
  try {
    // Connect to the user's Ethereum provider 
    const web3 = new Web3(window.ethereum);
    await window.ethereum.enable();

    const contract = new web3.eth.Contract(
      ContractABI.abi,
      contractAddress
    );
  

    const everyPatient = await contract.methods
      .get_every_patient(
       
      )
      .call();

      console.log(everyPatient)
     
      
    return everyPatient;
  } catch (error) {
    console.error("Error registering user:", error);
  }
}

// creating blocks
const creating_blocks = async (
  patients_address,
  CID_key,
  patient_name
) => {
  try {
    const web3 = new Web3(window.ethereum);
    await window.ethereum.enable();

    const contract = new web3.eth.Contract(
      ContractABI.abi,
      contractAddress
    );

    await contract.methods
      .createblock(
        patients_address,
        CID_key,
        patient_name
      )
      .send({ from: window.ethereum.selectedAddress });

    alert("Patient registered succesfully");
  } catch (error) {
    console.log(error);
  }
};

// get ipfs hash 
export const _get_ipfs = async (patients_address) => {
  try {
    const web3 = new Web3(window.ethereum);
    await window.ethereum.enable();

    const contract = new web3.eth.Contract(
      ContractABI.abi,
      contractAddress
    );

    await contract.methods
      .get_CID_key(
      patients_address
      )
      .send({ from: window.ethereum.selectedAddress });

    alert("Doctor registered succesfully");
  } catch (error) {
    console.log(error);
  }

}

