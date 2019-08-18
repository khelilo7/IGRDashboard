import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.scss"]
})
export class CardComponent implements OnInit {
  @Input() title: string = "title";
  @Input() subtitle: string = "subtitle";
  @Input() text: string = "text";
  constructor() {}

  ngOnInit() {}
}
