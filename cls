[1mdiff --git a/index.html b/index.html[m
[1mindex 5852d84..f30b24f 100644[m
[1m--- a/index.html[m
[1m+++ b/index.html[m
[36m@@ -113,10 +113,30 @@[m
                             Courses</a>[m
                     </div>[m
                 </div>[m
[31m-[m
                 <div>[m
                     <div class="container details-container">[m
                         <div class="container">[m
[32m+[m[32m                            <hr>[m
[32m+[m[32m                            <div class="row">[m
[32m+[m[32m                                <div class="col-lg d-flex align-items-center justify-content-center justify-content-lg-end"[m
[32m+[m[32m                                    data-aos="fade-right">[m
[32m+[m[32m                                    <img src="resources/images/browser.png" id="course-img" alt="Course image">[m
[32m+[m[32m                                </div>[m
[32m+[m[32m                                <div class="col-lg d-flex align-items-center justify-content-center justify-content-lg-start"[m
[32m+[m[32m                                    data-aos="fade-left">[m
[32m+[m[32m                                    <h4 class="m-3 text-center text-lg-left">[m
[32m+[m[32m                                        You envision a future in web development but not sure how to start.[m
[32m+[m[32m                                    </h4>[m
[32m+[m[32m                                </div>[m
[32m+[m[32m                            </div>[m
[32m+[m[32m                        </div>[m
[32m+[m[32m                    </div>[m
[32m+[m[32m                </div>[m
[32m+[m[32m                <div>[m
[32m+[m[32m                    <div class="container details-container">[m
[32m+[m[32m                        <div class="container">[m
[32m+[m
[32m+[m
                             <div class="row">[m
                                 <div class="col-lg d-flex align-items-center justify-content-center justify-content-lg-end"[m
                                     data-aos="fade-right">[m
[1mdiff --git a/resources/style/style.css b/resources/style/style.css[m
[1mindex bee1920..e204da1 100644[m
[1m--- a/resources/style/style.css[m
[1m+++ b/resources/style/style.css[m
[36m@@ -197,6 +197,10 @@[m [mnav.navbar button.navbar-toggler {[m
   font-family: "Lilita One", cursive;[m
 }[m
 [m
[32m+[m[32m.topButton{[m
[32m+[m[32m  margin-bottom: 100%;[m
[32m+[m[32m}[m
[32m+[m
 .header-content hr {[m
   background-color: #fff;[m
   width: 100%;[m
[36m@@ -342,10 +346,11 @@[m [mnav.navbar button.navbar-toggler {[m
 .footer-container {[m
   color: #fff;[m
   background-color: #111;[m
[31m-  position: relative;[m
[31m-  padding: 4rem 2rem;[m
[32m+[m[32m  position:sticky;[m
[32m+[m[32m  padding: 40px;[m
   text-align: center;[m
   font-family: "Montserrat", sans-serif;[m
[32m+[m[32m  margin-top: 220%;[m
 }[m
 [m
 .footer-container h5 {[m
