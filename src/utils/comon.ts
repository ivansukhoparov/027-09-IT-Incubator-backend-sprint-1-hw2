export const createNewId = (descriptor:string) => {
    return (+(new Date())*Math.abs(Math.random()))+descriptor;
}