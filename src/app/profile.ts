import firebase from 'firebase';
export class ProfileView {
    public friends=[];
    public viewFriends(key:string) {
        firebase.database().ref('userProfile/'+key+'/friends/')
        .orderByChild('staus')
        .equalTo(2)
        .on('child_added',data=>{
            let key=data.key;
            console.log(key);
            firebase.database().ref('userProfile/'+key)
            .on('value',data=>{ 
                this.friends.push({
                    key:data.key,
                    email:data.val().email
                });
            });
        });
    }
}