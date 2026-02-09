import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Logger {

  info(msg: string) {
    console.log(`[INFO] ${new Date().toLocaleString()} ${msg}`)
  }

  error(msg: string) {
    console.error(`[ERROR] ${new Date().toLocaleString()} ${msg}`)
  }

  warning(msg: string) {
    console.warn(`[WARN] ${new Date().toLocaleString()} ${msg}`)
  }

}
