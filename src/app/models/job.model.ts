
export class JobModel {

  constructor(
    public companyname: string = '',
    public email: string = '',
    public title: string = '',
    public skills: string = '',
    public description: string = '',
    public status: string = 'waiting',
    public compensation: number = 0
  ){}

}
