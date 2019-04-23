import { Component, Input } from '@angular/core'
import { Post } from '../postForm/postForm.component'

@Component({
    selector: 'socialPosts',
    templateUrl: './socialPosts.component.html',
    styleUrls: ['./socialPosts.component.css']
})

export class SocialPostsComponent {
    title: string = 'Social Posts Component Module';
    post: Post;
    postList: Post[] = [
        { postTitle: 'Dog', postContent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', postLikes: 0 },
        { postTitle: 'Cat', postContent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', postLikes: 0 },
        { postTitle: 'Pig', postContent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', postLikes: 0 },
        { postTitle: 'Cow', postContent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', postLikes: 0 },
        { postTitle: 'Whale', postContent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', postLikes: 0 }
    ];
    formShow: boolean = true;
    popUp: boolean = false;
    popupInit = () => {
        this.popUp = true;
    }
    onClose = () => {
        this.popUp = false;
    }
    onSubmit = ($event) => {
        this.postList.unshift($event);
        this.popUp = false;
    }
    onDelete = (i) => {
        this.postList.splice(i, 1);
    }
    onLike = (i, $event) => {
        this.postList[i].postLikes = $event;
        console.log(this.postList);
    }
}