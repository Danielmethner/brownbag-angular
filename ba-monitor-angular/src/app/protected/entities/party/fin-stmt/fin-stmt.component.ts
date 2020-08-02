import { Component, OnInit, Input } from '@angular/core';
import { ControlService } from '@services/control.service';
import { ObjPartyService } from '@services/obj-party.service';
import { FinStmt } from '@models/FinStmt';
@Component({
  selector: 'app-fin-stmt',
  templateUrl: './fin-stmt.component.html',
  styleUrls: ['./fin-stmt.component.css']
})
export class FinStmtComponent implements OnInit {

  @Input() stmtType: string;
  finStmtList: FinStmt[];

  constructor(private controlService: ControlService, private objPartyService: ObjPartyService) { }

  ngOnInit(): void {
    this.getFinStmt(7, this.stmtType);
  }
  showFinStmtList(finStmtList: FinStmt[]): void {
    this.finStmtList = finStmtList;
  }
  getFinStmt(partyId: number, finStmtType: string): void {

    this.controlService.getFinYear().subscribe(finYear => {

      const currentYear = finYear;
      this.objPartyService.getFinStmtByPartyIdAndFinYearAndFinStmtTypeHist(
        partyId,
        currentYear,
        finStmtType,
        2
      ).subscribe(finStmtList => {
        this.showFinStmtList(finStmtList);
      });
    });
  }
}
