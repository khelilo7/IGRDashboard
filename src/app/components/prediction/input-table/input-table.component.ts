import { Component, OnInit } from "@angular/core";

@Component({
  selector: "input-table",
  templateUrl: "./input-table.component.html",
  styleUrls: ["./input-table.component.scss"]
})
export class InputTableComponent implements OnInit {
  rows = [];
  constructor() {}

  ngOnInit() {}
  id = 0;
  editField: string;
  personList: Array<any> = [
    {
      id: this.id,
      Drogue: "",
      Dose: "",
      Solvant: "",
      Sigle: "",
      Service: "",
      protocole: "",
      statut_proto: "",
      OK_chimio: "",
      OK_fab: "",
      validation_pharma: "",
      Th: "",
      Jour: "",
      mois: "",
      drogue_groupe: ""
    }
  ];

  awaitingPersonList: Array<any> = [
    {
      id: this.id,
      Drogue: "",
      Dose: "",
      Solvant: "",
      Sigle: "",
      Service: "",
      protocole: "",
      statut_proto: "",
      OK_chimio: "",
      OK_fab: "",
      validation_pharma: "",
      Th: "",
      Jour: "",
      mois: "",
      drogue_groupe: ""
    }
  ];

  updateList(id: number, property: string, event: any) {
    const editField = event.target.textContent;
    this.personList[id][property] = editField;
  }

  remove(id: any) {
    this.awaitingPersonList.push(this.personList[id]);
    this.personList.splice(id, 1);
  }

  add() {
    if (this.awaitingPersonList.length > 0) {
      this.id = this.id + 1;
      const person = this.awaitingPersonList[0];
      this.personList.push(person);
      this.awaitingPersonList.splice(0, 1);
    }
  }

  changeValue(id: number, property: string, event: any) {
    this.editField = event.target.textContent;
  }

  submit() {
    console.log(this.personList);
  }
}
