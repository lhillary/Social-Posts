import { Component, Input, Output, EventEmitter } from '@angular/core'

export interface Post {
    postTitle: string,
    postContent: string
}

@Component({
    selector: 'postForm',
    templateUrl: './postForm.component.html',
    styleUrls: ['./postForm.component.css']
})

export class PostFormComponent {
    title = 'Post Form Component Module';
    @Input() form: boolean;
    @Input() popUp: boolean;
    titleInput: string = null;
    textInput: string = null;
    post: Post;
    @Output() submitted = new EventEmitter<Post>();
    @Output() popUpChanged = new EventEmitter<boolean>();
    close = (popUp) => {
        this.popUpChanged.emit(true);
    }
    submit = (newTitle: string, newContent: string) => {
        const post = { postTitle: newTitle, postContent: newContent };
        this.submitted.emit(post);
    }
}
