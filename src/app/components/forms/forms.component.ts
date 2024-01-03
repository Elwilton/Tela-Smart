import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.scss'
})
export class FormsComponent {
filteredResults: any;
onClean() {
throw new Error('Method not implemented.');
}
onSubmit() {
throw new Error('Method not implemented.');
}

}
