
export async function getProjectByTitle(projectName){
  try {
    const response = await fetch(`http://localhost:5000/api/projects/${projectName}`) 
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
     const  data = await response.json()
     return data;
  } catch (error) {
    console.log(error)
  }
}