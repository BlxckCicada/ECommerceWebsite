import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: ` <div class="border-black ">
    <div class="mt-56">
      <h1 class="text-gray-600 flex justify-center text-4xl">
        Our Website is Under Development
      </h1>
      <p class="text-gray-500 flex justify-center text-xl">
        We are working hard to bring you an amazing website. Please check back
        soon!
      </p>
    </div>
  </div>`,
  styles: [
    `
      @tailwind base;
      @tailwind components;
      @tailwind utilities;
      @layer base {
        b {
          font-family: Arial, sans-serif;
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          background-color: #f0f0f0;
          text-align: center;
          padding: 50px;
        }
      }
    `,
  ],
})
export class AppComponent {
  title = 'client';
}
