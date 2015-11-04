// Created by iWeb 3.0.4 local-build-20130225

function createMediaStream_id4()
{return IWCreatePhotocast("http://www.goldenkitten.com/Golden_Ears/Kittens_files/rss.xml",true);}
function initializeMediaStream_id4()
{createMediaStream_id4().load('http://www.goldenkitten.com/Golden_Ears',function(imageStream)
{var entryCount=imageStream.length;var headerView=widgets['widget3'];headerView.setPreferenceForKey(imageStream.length,'entryCount');NotificationCenter.postNotification(new IWNotification('SetPage','id4',{pageIndex:0}));});}
function layoutMediaGrid_id4(range)
{createMediaStream_id4().load('http://www.goldenkitten.com/Golden_Ears',function(imageStream)
{if(range==null)
{range=new IWRange(0,imageStream.length);}
IWLayoutPhotoGrid('id4',new IWPhotoGridLayout(3,new IWSize(196,196),new IWSize(196,35),new IWSize(218,246),27,27,0,new IWSize(38,38)),new IWPhotoFrame([IWCreateImage('Kittens_files/Crayon_BK_v4%20%2801%29.png'),IWCreateImage('Kittens_files/Crayon_BK_v4%20%2802%29.png'),IWCreateImage('Kittens_files/Crayon_BK_v4%20%2803%29.png'),IWCreateImage('Kittens_files/Crayon_BK_v4%20%2805%29.png'),IWCreateImage('Kittens_files/Crayon_BK_v4%20%2808%29.png'),IWCreateImage('Kittens_files/Crayon_BK_v4%20%2807%29.png'),IWCreateImage('Kittens_files/Crayon_BK_v4%20%2806%29.png'),IWCreateImage('Kittens_files/Crayon_BK_v4%20%2804%29.png')],null,0,0.875000,19.000000,19.000000,19.000000,19.000000,41.000000,41.000000,41.000000,41.000000,2.000000,1.000000,2.000000,1.000000,null,null,null,0.100000),imageStream,range,null,null,1.000000,{backgroundColor:'rgb(0, 0, 0)',reflectionHeight:100,reflectionOffset:2,captionHeight:100,fullScreen:0,transitionIndex:2},'Media/slideshow.html','widget3','widget4','widget5')});}
function relayoutMediaGrid_id4(notification)
{var userInfo=notification.userInfo();var range=userInfo['range'];layoutMediaGrid_id4(range);}
function onStubPage()
{var args=window.location.href.toQueryParams();parent.IWMediaStreamPhotoPageSetMediaStream(createMediaStream_id4(),args.id);}
if(window.stubPage)
{onStubPage();}
setTransparentGifURL('Media/transparent.gif');function hostedOnDM()
{return false;}
function onPageLoad()
{IWRegisterNamedImage('comment overlay','Media/Photo-Overlay-Comment.png')
IWRegisterNamedImage('movie overlay','Media/Photo-Overlay-Movie.png')
loadMozillaCSS('Kittens_files/KittensMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');detectBrowser();adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');NotificationCenter.addObserver(null,relayoutMediaGrid_id4,'RangeChanged','id4')
Widget.onload();fixupAllIEPNGBGs();fixAllIEPNGs('Media/transparent.gif');initializeMediaStream_id4()
performPostEffectsFixups()}
function onPageUnload()
{Widget.onunload();}
