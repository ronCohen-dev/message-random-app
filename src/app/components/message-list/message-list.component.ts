import { Component, OnInit } from '@angular/core';
import { Message } from 'src/app/models/message.model';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.scss'],
})
export class MessageListComponent implements OnInit {
  MAX_MESSAGES_TO_VIEW: number = 3;
  TOTAL_MESSAGES_COUNT: number = 10;
  CURRENT_INDEX: number = 0;
  REFRESH_TIMEOUT = 2500;
  messages: Message[] = [];

  constructor(private service: MessageService) {
  }

  
  ngOnInit(): void {
    this.messages = this.service.message.slice(0, this.MAX_MESSAGES_TO_VIEW);
    setInterval(() => {
      // close array into loop to restart over
      if (this.CURRENT_INDEX === 9) {
        this.CURRENT_INDEX = 0;
      } else {
        this.CURRENT_INDEX = this.CURRENT_INDEX + 1;
      }

      // show max of array content as assigned in MAX_MESSAGES_TO_VIEW
      this.messages = this.service.message.slice(
        this.CURRENT_INDEX,
        this.MAX_MESSAGES_TO_VIEW + this.CURRENT_INDEX
      );

      // update current list from begining in case that rest is less than MAX_MESSAGES_TO_VIEW
      if (this.messages.length < this.MAX_MESSAGES_TO_VIEW) {
        this.messages.push(
          ...this.service.message.slice(
            0,
            this.MAX_MESSAGES_TO_VIEW - this.messages.length
          )
        );
      }

      // reverse array to view last message at the top
      this.messages = this.messages.reverse();
    }, 3000);
  }
}

