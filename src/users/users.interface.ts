export interface IUserRepo{
    getAllUsers():Promise<any>
    addUser(body:any):Promise<any>
    getUserById(id:any):Promise<any>
    updateUserById(id:any,body:any):Promise<any>
}