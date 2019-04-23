import { Component, Input, Output, EventEmitter } from '@angular/core'
import { Post } from '../postForm/postForm.component'

@Component({
    selector: 'post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.css']
})

export class PostComponent {
    title = 'Post Component Module';
    count: number = 0;
    @Input() post: Post;
    @Output() deleted = new EventEmitter<boolean>();
    @Output() liked = new EventEmitter<number>();
    deleteAt = () => {
        this.deleted.emit(true);
    }
    addLikes = () => {
        this.count += 1;
        let likes = this.count;
        this.liked.emit(likes);
    }
}