// Created by iWeb 3.0.4 local-build-20151103

function createMediaStream_id4()
{return IWCreatePhotocast("http://www.goldenkitten.com/Golden_Ears/Available_Kittens_files/rss.xml",true);}
function initializeMediaStream_id4()
{createMediaStream_id4().load('http://www.goldenkitten.com/Golden_Ears',function(imageStream)
{var entryCount=imageStream.length;var headerView=widgets['widget3'];headerView.setPreferenceForKey(imageStream.length,'entryCount');NotificationCenter.postNotification(new IWNotification('SetPage','id4',{pageIndex:0}));});}
function layoutMediaGrid_id4(range)
{createMediaStream_id4().load('http://www.goldenkitten.com/Golden_Ears',function(imageStream)
{if(range==null)
{range=new IWRange(0,imageStream.length);}
IWLayoutPhotoGrid('id4',new IWPhotoGridLayout(2,new IWSize(291,291),new IWSize(291,37),new IWSize(316,343),27,27,0,new IWSize(6,6)),new IWPhotoFrame([IWCreateImage('Available_Kittens_files/comic-1_01.png'),IWCreateImage('Available_Kittens_files/comic-1_02.png'),IWCreateImage('Available_Kittens_files/comic-1_03.png'),IWCreateImage('Available_Kittens_files/comic-1_06.png'),IWCreateImage('Available_Kittens_files/comic-1_09.png'),IWCreateImage('Available_Kittens_files/comic-1_08.png'),IWCreateImage('Available_Kittens_files/comic-1_07.png'),IWCreateImage('Available_Kittens_files/comic-1_04.png')],null,0,1.000000,4.000000,4.000000,1.000000,1.000000,5.000000,5.000000,6.000000,6.000000,71.000000,115.000000,71.000000,115.000000,null,null,null,0.500000),imageStream,range,null,null,1.000000,{backgroundColor:'rgb(0, 0, 0)',reflectionHeight:100,reflectionOffset:2,captionHeight:100,fullScreen:0,transitionIndex:2},'Media/slideshow.html','widget3','widget4','widget5')});}
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
loadMozillaCSS('Available_Kittens_files/Available_KittensMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');detectBrowser();adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');NotificationCenter.addObserver(null,relayoutMediaGrid_id4,'RangeChanged','id4')
Widget.onload();fixupAllIEPNGBGs();fixAllIEPNGs('Media/transparent.gif');initializeMediaStream_id4()
performPostEffectsFixups()}
function onPageUnload()
{Widget.onunload();}
