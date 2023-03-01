import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'i-frame-checkout-test';

  ngOnInit():void {
    this.postListener()
  }


  postListener = () => {
    console.log('yes')
    // Listen for messages from the sending window
    window.addEventListener('message', function(event) {
      console.log(event)
      // Check that the message came from the expected origin
      if (event.origin === 'http://localhost:4200') {
        // Do something with the message
        console.log('Received message:', event.data);
      }
    });
  }

}
