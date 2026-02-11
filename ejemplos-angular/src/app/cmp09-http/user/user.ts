import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  user = input<any>(null)
  onLoadPosts = output<{userId: number}>()


  cargarPosts() {
    this.onLoadPosts.emit({userId: this.user().id})
  }

}
