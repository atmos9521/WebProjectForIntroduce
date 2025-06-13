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
        this.retireExpense = this.yearlyExpense / 0.04;
        break;
      case 'yearlyExpense':
        this.monthlyExpense = this.yearlyExpense / 12;
        this.retireExpense = this.yearlyExpense / 0.04;
        break;
      case 'retireExpense':
        if(this.monthlyExpense == 0 && this.yearlyExpense == 0){
			
		}else {
			this.yearlyExpense = this.retireExpense * 0.04;
			this.monthlyExpense = this.yearlyExpense / 12;
		}
		
		// 計算預估退休年
		if(this.yearlySave == 0 || this.retireExpense == 0 ){
			
		}else{
			this.retireYear = this.retireExpense / this.yearlySave;
		}
        break;
      case 'monthlySave':
        this.yearlySave = this.monthlySave * 12;
		if(this.yearlySave == 0 || this.retireExpense == 0 ){
			
		}else{
			this.retireYear = this.retireExpense / this.yearlySave;
		}
        break;
      case 'yearlySave':
        this.monthlySave = this.yearlySave / 12;
		if(this.yearlySave == 0 || this.retireExpense == 0 ){
			
		}else{
			this.retireYear = this.retireExpense / this.yearlySave;
		}
        break;
      case 'retireYear':
	    if(this.retireExpense == 0){
			
		}
        else if(this.yearlySave == 0 && this.monthlySave == 0 ){
			
		}
		else{
			if(this.monthlySave == 0){
				this.monthlySave = this.yearlySave / 12;
			}else if(this.yearlySave == 0){
				this.yearlySave = this.monthlySave * 12;
			}
			this.retireYear = this.retireExpense / this.yearlySave;
		}
        break;
      default:
        break;
    }
  }
}
