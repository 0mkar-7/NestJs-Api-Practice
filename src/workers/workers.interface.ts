export interface IWorkerRepo{
    getWorkers():Promise<any>
    addWorker(body:any):Promise<any>
    getWorkerById(id:any):Promise<any>
}