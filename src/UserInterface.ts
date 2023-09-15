 export interface User {
    id: number;
    name: string;
    phone:string;
    email:string;
    guid: string;
    organization:string
    guidianceEmail:string
    balance:string
    BVN:string
    AccountNumber:number
    guidiancePhone:string
    isActive:boolean
    address:string
    month:string
    year:string
    day:string
    status:string
    Tier:number
    Bank:string
    EducationLevel:string
  EmploymentStatus:string
  Years:string
  relationship:string
  children:string|number
  materialStatus:string
  gender:string
  Loans:number
  money:number
  social:string
  friends: Friend[]
  house:string
  Sector:string
  }

  interface Friend {
    id: number;
    name: string;
    email:string
    phone:string
    relationship:string
    // Add other properties as needed for each friend
  }