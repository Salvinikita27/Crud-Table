import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  


  data: any[] = [];
  selectedItem: any = {};
  columns: any[] = [
    { field: 'id', header: 'ID' },
    { field: 'name', header: 'Name' },
    { field: 'age', header: 'Age' },
    { field: 'city', header: 'City' }
  ];

  ngOnInit() {
    // Initial data for demonstration
    this.data = [
      { id: 1, name: 'John', age: 28, city: 'New York' },
      { id: 2, name: 'Jane', age: 32, city: 'Los Angeles' },
      { id: 3, name: 'Mike', age: 40, city: 'Chicago' },
      { id: 4, name: 'Nick', age: 48, city: 'USA' },
      { id: 5, name: 'Patrick', age: 30, city: 'UK' }
    ];
    console.log(this.data)
  }

  onEdit(rowData: any) {
    this.selectedItem = { ...rowData };  // Copy the row data for editing
  }

  onDelete(rowData: any) {
    this.data = this.data.filter(item => item.id !== rowData.id);  // Remove the item from the data array
  }

  onSave() {
    if (this.selectedItem.id) {
      const index = this.data.findIndex(item => item.id === this.selectedItem.id);
      if (index > -1) {
        this.data[index] = { ...this.selectedItem };  // Update the existing item
      }
    } else {
      this.selectedItem.id = this.data.length + 1;
      this.data.push({ ...this.selectedItem });  // Add a new item
    }

    this.selectedItem = {};  // Reset the form
  }

  onCancel() {
    this.selectedItem = {};  // Reset the form
  }
}


