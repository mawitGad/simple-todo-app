import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'todo-app';
  list : {text : string , id : string}[]= [];

// Update states
update_value : {text : string , id : string} | null = null


  add_item(e : SubmitEvent){
    e.preventDefault()

    // I didnt have the time to learn about forms in angular
    const text = document.querySelector('input') as HTMLInputElement;

    this.list.push({text : text.value , id : this.list.length.toString()});
    text.value = "";
  }
  update_item(e : SubmitEvent){
    e.preventDefault()

    const text = document.querySelector('#update-input') as HTMLInputElement;
    this.list = this.list.map((item) => {
      if(item.id === this.update_value?.id){
        return {
          ...item,
          text : text.value
        }
      }else{
        return item
      }
    })


    text.value = "";
    this.update_value = null
  }
  open_update(item : {text : string , id : string}){
    this.update_value = item
    const text = document.querySelector('#update-input') as HTMLInputElement;
    console.log(text)
    text.value = item.text
    text.focus()
  }

  delete_item(id : string){
    this.list = this.list.filter((item) => item.id !== id)
  }

}
