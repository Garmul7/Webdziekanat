export class Announcment{
  id: number;
  announcmentTitle: string;
  announcmentInfo: string;
  annoucmentDate: string;

  constructor(announcmentTitle: string, announcmentInfo: string, annoucmentDate: string){
    this.announcmentTitle = announcmentTitle;
    this.announcmentInfo = announcmentInfo;
    this.annoucmentDate = annoucmentDate;
  }

}
