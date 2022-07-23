import { Injectable } from '@angular/core';
import { Message } from '../models/message.model';

@Injectable({ providedIn: 'root' })
export class MessageService {
  private messages: Message[] = [
    {
      profileImagePath: './../../../../assets/profilePictures/null.jpeg',
      senderName: 'Ron',
      message:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ex leo, mollis in pulvinar id, venenatis id urna. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas nisl felis, vulputate et justo nec, tincidunt euismod nibh. Nunc eget rhoncus nulla. Integer dolor nulla, elementum at lacus et, porta porta tortor. Morbi lobortis neque ex, volutpat faucibus ex feugiat et. Nulla facilisi. Vestibulum a interdum purus. Nulla bibendum erat risus, sollicitudin sodales odio efficitur vel. Phasellus posuere eros sit amet ornare congue. Duis a risus mattis, elementum lectus sed, varius metus.',
      date: new Date(),
    },
    {
      profileImagePath: './../../../../assets/profilePictures/null.jpeg',
      senderName: 'Daniel',
      message:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ex leo, mollis in pulvinar id, venenatis id urna. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas nisl felis, vulputate et justo nec, tincidunt euismod nibh. Nunc eget rhoncus nulla. Integer dolor nulla, elementum at lacus et, porta porta tortor. Morbi lobortis neque ex, volutpat faucibus ex feugiat et. Nulla facilisi. Vestibulum a interdum purus. Nulla bibendum erat risus, sollicitudin sodales odio efficitur vel. Phasellus posuere eros sit amet ornare congue. Duis a risus mattis, elementum lectus sed, varius metus.',
      date: new Date(),
    },
    {
      profileImagePath: './../../../../assets/profilePictures/null.jpeg',
      senderName: 'Shahar',
      message:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ex leo, mollis in pulvinar id, venenatis id urna. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas nisl felis, vulputate et justo nec, tincidunt euismod nibh. Nunc eget rhoncus nulla. Integer dolor nulla, elementum at lacus et, porta porta tortor. Morbi lobortis neque ex, volutpat faucibus ex feugiat et. Nulla facilisi. Vestibulum a interdum purus. Nulla bibendum erat risus, sollicitudin sodales odio efficitur vel. Phasellus posuere eros sit amet ornare congue. Duis a risus mattis, elementum lectus sed, varius metus.',
      date: new Date(),
    },
    {
      profileImagePath: './../../../../assets/profilePictures/null.jpeg',
      senderName: 'Maria',
      message:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ex leo, mollis in pulvinar id, venenatis id urna. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas nisl felis, vulputate et justo nec, tincidunt euismod nibh. Nunc eget rhoncus nulla. Integer dolor nulla, elementum at lacus et, porta porta tortor. Morbi lobortis neque ex, volutpat faucibus ex feugiat et. Nulla facilisi. Vestibulum a interdum purus. Nulla bibendum erat risus, sollicitudin sodales odio efficitur vel. Phasellus posuere eros sit amet ornare congue. Duis a risus mattis, elementum lectus sed, varius metus.',
      date: new Date(),
    },
    {
      profileImagePath: './../../../../assets/profilePictures/null.jpeg',
      senderName: 'Ben',
      message:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ex leo, mollis in pulvinar id, venenatis id urna. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas nisl felis, vulputate et justo nec, tincidunt euismod nibh. Nunc eget rhoncus nulla. Integer dolor nulla, elementum at lacus et, porta porta tortor. Morbi lobortis neque ex, volutpat faucibus ex feugiat et. Nulla facilisi. Vestibulum a interdum purus. Nulla bibendum erat risus, sollicitudin sodales odio efficitur vel. Phasellus posuere eros sit amet ornare congue. Duis a risus mattis, elementum lectus sed, varius metus.',
      date: new Date(),
    },
    {
      profileImagePath: './../../../../assets/profilePictures/null.jpeg',
      senderName: 'Sami',
      message:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ex leo, mollis in pulvinar id, venenatis id urna. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas nisl felis, vulputate et justo nec, tincidunt euismod nibh. Nunc eget rhoncus nulla. Integer dolor nulla, elementum at lacus et, porta porta tortor. Morbi lobortis neque ex, volutpat faucibus ex feugiat et. Nulla facilisi. Vestibulum a interdum purus. Nulla bibendum erat risus, sollicitudin sodales odio efficitur vel. Phasellus posuere eros sit amet ornare congue. Duis a risus mattis, elementum lectus sed, varius metus.',
      date: new Date(),
    },
    {
      profileImagePath: './../../../../assets/profilePictures/null.jpeg',
      senderName: 'Yardena',
      message:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ex leo, mollis in pulvinar id, venenatis id urna. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas nisl felis, vulputate et justo nec, tincidunt euismod nibh. Nunc eget rhoncus nulla. Integer dolor nulla, elementum at lacus et, porta porta tortor. Morbi lobortis neque ex, volutpat faucibus ex feugiat et. Nulla facilisi. Vestibulum a interdum purus. Nulla bibendum erat risus, sollicitudin sodales odio efficitur vel. Phasellus posuere eros sit amet ornare congue. Duis a risus mattis, elementum lectus sed, varius metus.',
      date: new Date(),
    },
    {
      profileImagePath: './../../../../assets/profilePictures/null.jpeg',
      senderName: 'Motti',
      message:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ex leo, mollis in pulvinar id, venenatis id urna. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas nisl felis, vulputate et justo nec, tincidunt euismod nibh. Nunc eget rhoncus nulla. Integer dolor nulla, elementum at lacus et, porta porta tortor. Morbi lobortis neque ex, volutpat faucibus ex feugiat et. Nulla facilisi. Vestibulum a interdum purus. Nulla bibendum erat risus, sollicitudin sodales odio efficitur vel. Phasellus posuere eros sit amet ornare congue. Duis a risus mattis, elementum lectus sed, varius metus.',
      date: new Date(),
    },
    {
      profileImagePath: './../../../../assets/profilePictures/null.jpeg',
      senderName: 'Ayalla',
      message:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ex leo, mollis in pulvinar id, venenatis id urna. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas nisl felis, vulputate et justo nec, tincidunt euismod nibh. Nunc eget rhoncus nulla. Integer dolor nulla, elementum at lacus et, porta porta tortor. Morbi lobortis neque ex, volutpat faucibus ex feugiat et. Nulla facilisi. Vestibulum a interdum purus. Nulla bibendum erat risus, sollicitudin sodales odio efficitur vel. Phasellus posuere eros sit amet ornare congue. Duis a risus mattis, elementum lectus sed, varius metus.',
      date: new Date(),
    },
    {
      profileImagePath: './../../../../assets/profilePictures/null.jpeg',
      senderName: 'Kobbi',
      message:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ex leo, mollis in pulvinar id, venenatis id urna. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas nisl felis, vulputate et justo nec, tincidunt euismod nibh. Nunc eget rhoncus nulla. Integer dolor nulla, elementum at lacus et, porta porta tortor. Morbi lobortis neque ex, volutpat faucibus ex feugiat et. Nulla facilisi. Vestibulum a interdum purus. Nulla bibendum erat risus, sollicitudin sodales odio efficitur vel. Phasellus posuere eros sit amet ornare congue. Duis a risus mattis, elementum lectus sed, varius metus.',
      date: new Date(),
    },
  ];
  
  get message(){
    return this.messages.slice();
  }
}
