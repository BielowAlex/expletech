export interface IPost {
  userId:number,
  id:number,
  title:string,
  body:string,
}

export interface IAddedPost {
  title: string,
  body: string,
  userId: number,
  id:number,

}

export interface IPostFormData {
  title: string,
  desc: string
}

export interface IPostBody {
  title:string,
  body:string
  userId:number,
}

export interface IComment {
  postId:number,
  id:number,
  name:string,
  email:string,
  body:string
}

export interface IUser {
  id: number,
  name: string,
  username: string,
  email: string,
  address: {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: {
      lat:string,
      lng: string,
    }
  },
  phone: string,
  website: string,
  company: {
    name:string,
    catchPhrase: string,
    bs:string
  }
}
