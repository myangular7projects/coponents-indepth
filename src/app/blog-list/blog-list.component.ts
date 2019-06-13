import { Component, OnInit, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { Post } from '../blog-post/post.model';
import { BlogPostComponent } from '../blog-post/blog-post.component';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {


  posts: Post[][];

  currentPage: number;
  @ViewChildren("blogPost") blogPostChildrens: QueryList<BlogPostComponent>;

  constructor() { 
    
  }

  ngOnInit() {

    // this.posts.push(new Post("post1","this is pov fsdjvbouslvn ksulgphreionkv sj vboarefaep;kn nnniuhre8yfghapen vsb8reuohfvapndvbhao8yehfpojemncdhvbe8foagierbvaeist 1"));
    // this.posts.push(new Post("post2","this is vdbvlireabvajelkdnvjudvoe8ryiv vvoruegbeprvne;jvne vhibvriuegfueo;cnd ciebvuergib;ne ve veiuvfpeiofned ved vepufbeuipost 2"));
    // this.posts.push(new Post("post3","this is pv ,sjvoeryuifvbkdjnahufvvkeulbdvoerugfyper9hvnovboer8ygp9erhvnroeuygfre8iost 3"));

    this.currentPage = 0;
    this.posts = 
    [
      [
        {
          title: 'post1',
          summary: ' sdhvckajsdcvudkacvbdlvugcjvlwlCUVJLBCGSHBLDIVCBDJKBAC GLUVAE;VBFV HLFVBPERU9IVGHRAEO;VNBFHV PFI;VADUB;VDAJV UGSFVRE;AVELVN.DV ABFOVALBA;EROVB/DLNVC AVUEHOLAEIWB'
        },
        {
          title: 'post12',
          summary: ' sdhvckajsdcvudkacvbdlvugcjvlwlCUVJLBCGSHBLDIVCBDJKBAC GLUVAE;VBFV HLFVBPERU9IVGHRAEO;VNBFHV PFI;VADUB;VDAJV UGSFVRE;AVELVN.DV ABFOVALBA;EROVB/DLNVC AVUEHOLAEIWB'
        }
      ],
      [
        {
          title: 'post2',
          summary: ' sdhvckajsdcvudkacvbdlvugcjvlwlCUVJLBCGSHBLDIVCBDJKBAC GLUVAE;VBFV HLFVBPERU9IVGHRAEO;VNBFHV PFI;VADUB;VDAJV UGSFVRE;AVELVN.DV ABFOVALBA;EROVB/DLNVC AVUEHOLAEIWB'
        },
        {
          title: 'post21',
          summary: ' sdhvckajsdcvudkacvbdlvugcjvlwlCUVJLBCGSHBLDIVCBDJKBAC GLUVAE;VBFV HLFVBPERU9IVGHRAEO;VNBFHV PFI;VADUB;VDAJV UGSFVRE;AVELVN.DV ABFOVALBA;EROVB/DLNVC AVUEHOLAEIWB'
        }
      ],
      [
        {
          title: 'post3',
          summary: ' sdhvckajsdcvudkacvbdlvugcjvlwlCUVJLBCGSHBLDIVCBDJKBAC GLUVAE;VBFV HLFVBPERU9IVGHRAEO;VNBFHV PFI;VADUB;VDAJV UGSFVRE;AVELVN.DV ABFOVALBA;EROVB/DLNVC AVUEHOLAEIWB'
        },
        {
          title: 'post31',
          summary: ' sdhvckajsdcvudkacvbdlvugcjvlwlCUVJLBCGSHBLDIVCBDJKBAC GLUVAE;VBFV HLFVBPERU9IVGHRAEO;VNBFHV PFI;VADUB;VDAJV UGSFVRE;AVELVN.DV ABFOVALBA;EROVB/DLNVC AVUEHOLAEIWB'
        }
      ]
    ]
  }

  updateCurrentPage(newPage){
    console.log("event emitted and before event consumed")
    this.currentPage = newPage;
  }

  updateAllSummary(){

    this.blogPostChildrens.forEach(e => e.showFullText())

  }

}
