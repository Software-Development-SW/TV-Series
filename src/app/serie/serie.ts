export class Serie{
  id:number;
  name:String;
  channel:String;
  seasons:number;
  information:String;
  picture:String;
  website:String;

  constructor(id:number, name:String, channel:String, seasons:number, information:String, picture:String, website:String){
      this.id = id
      this.name = name;
      this.channel = channel;
      this.seasons = seasons;
      this.information = information;
      this.picture = picture;
      this.website = website;
  }

}
