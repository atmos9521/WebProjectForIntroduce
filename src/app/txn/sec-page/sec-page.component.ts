import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sec-page',
  imports: [FormsModule ],
  templateUrl: './sec-page.component.html',
  styleUrl: './sec-page.component.css'
})
export class SecPageComponent implements OnInit {
  private activeRouter = inject(ActivatedRoute);

  monthlyExpense: number = 0;
  yearlyExpense: number = 0;
  retireExpense: number = 0;

  monthlySave: number = 0;
  yearlySave: number = 0;
  retireYear: number = 0;

  ngOnInit(): void {
    console.log("SecPageComponent ngOnInit");
  }

  getDetailID(): void {
    // const id = this.activeRouter.snapshot.paramMap.get('id');
    // console.log(id);
  }

  onInputBlur(input_id_name: string): void {
    switch (input_id_name) {
      case 'monthlyExpense':
        this.yearlyExpense = this.monthlyExpense * 12;
        this.retireExpense = this.yearlyExpense * 30; // 假设退休后每年花费30年
        break;
      case 'yearlyExpense':
        this.monthlyExpense = this.yearlyExpense / 12;
        this.retireExpense = this.yearlyExpense * 30; // 假设退休后每年花费30年
        break;
      case 'retireExpense':
        this.monthlyExpense = this.retireExpense / 360; // 假设退休后每月花费
        this.yearlyExpense = this.retireExpense / 30; // 假设退休后每年花费
        break;
      case 'monthlySave':
        this.yearlySave = this.monthlySave * 12;
        break;
      case 'yearlySave':
        this.monthlySave = this.yearlySave / 12;
        break;
      default:
        break;
    }
  }
}
