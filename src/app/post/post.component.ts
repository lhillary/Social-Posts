import { Component, Input, Output, EventEmitter } from '@angular/core'
import { Post } from '../postForm/postForm.component'

@Component({
    selector: 'post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.css']
})

export class PostComponent {
    title = 'Post Component Module';
    @Input() post: Post;
    @Output() deleted = new EventEmitter<boolean>();
    deleteAt = () => {
        this.deleted.emit(true);
    }
}