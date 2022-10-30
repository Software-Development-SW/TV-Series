export class Serie{
    iD:number;
    name:String;
    channel:String;
    seassons:number;
    information:String;
    picture:String;
    website:String;

    constructor(iD:number, name:String, channel:String, seassons:number, information:String, picture:String, website:String){
        this.iD = iD
        this.name = name;
        this.channel = channel;
        this.seassons = seassons;
        this.information = information;
        this.picture = picture;
        this.website = website;
    }

}