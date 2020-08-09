import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { ControlService } from '@services/control.service';
import { ObjPartyService } from '@services/obj-party.service';
import { FinStmt } from '@models/FinStmt';
import { ObjParty } from '@models/ObjParty';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-fin-stmt',
  templateUrl: './fin-stmt.component.html',
  styleUrls: ['./fin-stmt.component.css']
})
export class FinStmtComponent implements OnInit {

  private data = new BehaviorSubject<ObjParty[]>([]);

  @Input()
  set objParty(objParty: ObjParty) {
    console.log('new party fin stmt');
    console.log(objParty);
    this.getFinStmt(objParty, this.stmtType);
  }

  @Input() stmtType: string;
  finStmtList: FinStmt[];

  constructor(private controlService: ControlService, private objPartyService: ObjPartyService) { 
    console.log('creation of');
  }

  ngOnInit(): void {
    console.log('creation of');
    this.data
      .subscribe(x => {

        console.log('something is happening');
      });
  }

  ngOnChanges(changes: SimpleChanges) {
    // only run when property "data" changed
    console.log('data changed');
  }

  showFinStmtList(finStmtList: FinStmt[]): void {
    this.finStmtList = finStmtList;
  }
  getFinStmt(objParty: ObjParty, finStmtType: string): void {

    if (objParty != null) {
      this.controlService.getFinYear().subscribe(finYear => {

        const currentYear = finYear;
        this.objPartyService.getFinStmtByPartyIdAndFinYearAndFinStmtTypeHist(
          objParty.id,
          currentYear,
          finStmtType,
          2
        ).subscribe(finStmtList => {
          this.showFinStmtList(finStmtList);
        });
      });

    }
  }
}
