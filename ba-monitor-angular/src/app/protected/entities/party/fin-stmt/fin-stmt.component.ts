import { Component, OnInit, Input } from '@angular/core';
import { ControlService } from '@services/control.service';
import { ObjPartyService } from '@services/obj-party.service';
import { FinStmt } from '@models/FinStmt';
import { ObjParty } from '@models/ObjParty';
@Component({
  selector: 'app-fin-stmt',
  templateUrl: './fin-stmt.component.html',
  styleUrls: ['./fin-stmt.component.css']
})
export class FinStmtComponent implements OnInit {
  @Input() set objParty(objParty: ObjParty) {
    this.getFinStmt(objParty, this.stmtType);
  }

  @Input() stmtType: string;
  finStmtList: FinStmt[];

  constructor(private controlService: ControlService, private objPartyService: ObjPartyService) { }

  ngOnInit(): void {
    this.getFinStmt(this.objParty, this.stmtType);
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
