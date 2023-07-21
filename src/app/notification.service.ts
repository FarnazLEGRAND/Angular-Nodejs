import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  current = '';

  notify(message:string, timer = 10000) {
    this.current = message;
    setTimeout(() => {
      this.current = '';
    }, timer)
  }
}

//  yek ravesh car ke masalan khodesh peygham ra bardare
// export class notificationService {
//   current = '';
//   timeout: any;
//   notify(message: string, timer = 10000) {
//     this.current = message;
//     this.timeout = setTimeout(() => {
//       this.current = '';
//     },
//       timer)
//   }

//   close() {
//     if (this.timeout) {
//       clearTimeout(this.timeout);
//       this.current =
//   }
//   }