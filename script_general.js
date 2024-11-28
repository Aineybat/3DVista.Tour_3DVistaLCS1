(function(){
var translateObjs = {};
function trans(c, d) {
    var e = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
    translateObjs[e[0x0]] = e;
    return '';
}
function regTextVar(f, g) {
    var h = ![];
    return i(g);
    function i(p, q) {
        switch (p['toLowerCase']()) {
        case 'title':
        case 'subtitle':
        case 'photo.title':
        case 'photo.description':
            var s = function () {
                switch (p['toLowerCase']()) {
                case 'title':
                case 'photo.title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                case 'photo.description':
                    return 'media.data.description';
                }
            }();
            if (s) {
                return function () {
                    var x, y;
                    var z = (q && q['viewerName'] ? this['getComponentByName'](q['viewerName']) : undefined) || this['getMainViewer']();
                    if (p['toLowerCase']()['startsWith']('photo'))
                        x = this['getByClassName']('PhotoAlbumPlayListItem')['filter'](function (B) {
                            var C = B['get']('player');
                            return C && C['get']('viewerArea') == z;
                        })['map'](function (D) {
                            return D['get']('media')['get']('playList');
                        });
                    else {
                        x = this['_getPlayListsWithViewer'](z);
                        y = o['bind'](this, z);
                    }
                    if (!h) {
                        for (var A = 0x0; A < x['length']; ++A) {
                            x[A]['bind']('changing', k, this);
                        }
                        h = !![];
                    }
                    return n['call'](this, x, s, y);
                };
            }
            break;
        case 'tour.name':
        case 'tour.description':
            return function () {
                return this['get']('data')['tour']['locManager']['trans'](p);
            };
        default:
            if (p['toLowerCase']()['startsWith']('viewer.')) {
                var t = p['split']('.');
                var u = t[0x1];
                if (u) {
                    var v = t['slice'](0x2)['join']('.');
                    return i(v, { 'viewerName': u });
                }
            } else if (p['toLowerCase']()['startsWith']('quiz.') && 'Quiz' in TDV) {
                var w = undefined;
                var s = function () {
                    switch (p['toLowerCase']()) {
                    case 'quiz.questions.answered':
                        return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                    case 'quiz.question.count':
                        return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                    case 'quiz.items.found':
                        return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                    case 'quiz.item.count':
                        return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                    case 'quiz.score':
                        return TDV['Quiz']['PROPERTY']['SCORE'];
                    case 'quiz.score.total':
                        return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                    case 'quiz.time.remaining':
                        return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                    case 'quiz.time.elapsed':
                        return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                    case 'quiz.time.limit':
                        return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                    case 'quiz.media.items.found':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                    case 'quiz.media.item.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                    case 'quiz.media.questions.answered':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                    case 'quiz.media.question.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                    case 'quiz.media.score':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                    case 'quiz.media.score.total':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                    case 'quiz.media.index':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                    case 'quiz.media.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                    case 'quiz.media.visited':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                    default:
                        var E = /quiz\.([\w_]+)\.(.+)/['exec'](p);
                        if (E) {
                            w = E[0x1];
                            switch ('quiz.' + E[0x2]) {
                            case 'quiz.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            }
                        }
                    }
                }();
                if (s) {
                    return function () {
                        var F = this['get']('data')['quiz'];
                        if (F) {
                            if (!h) {
                                if (w != undefined)
                                    if (w == 'global') {
                                        var H = this['get']('data')['quizConfig'];
                                        var J = H['objectives'];
                                        for (var L = 0x0, N = J['length']; L < N; ++L) {
                                            F['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], m['call'](this, J[L]['id'], s), this);
                                        }
                                    } else {
                                        F['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], m['call'](this, w, s), this);
                                    }
                                else
                                    F['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], l['call'](this, s), this);
                                h = !![];
                            }
                            try {
                                var O = 0x0;
                                if (w != undefined) {
                                    if (w == 'global') {
                                        var H = this['get']('data')['quizConfig'];
                                        var J = H['objectives'];
                                        for (var L = 0x0, N = J['length']; L < N; ++L) {
                                            O += F['getObjective'](J[L]['id'], s);
                                        }
                                    } else {
                                        O = F['getObjective'](w, s);
                                    }
                                } else {
                                    O = F['get'](s);
                                    if (s == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                        O += 0x1;
                                }
                                return O;
                            } catch (P) {
                                return undefined;
                            }
                        }
                    };
                }
            }
            break;
        }
        return function () {
            return '';
        };
    }
    function j() {
        var Q = this['get']('data');
        Q['updateText'](Q['translateObjs'][f]);
    }
    function k(R) {
        var S = R['data']['nextSelectedIndex'];
        if (S >= 0x0) {
            var T = R['source']['get']('items')[S];
            var U = function () {
                T['unbind']('begin', U, this);
                j['call'](this);
            };
            T['bind']('begin', U, this);
        }
    }
    function l(V) {
        return function (W) {
            if (V in W) {
                j['call'](this);
            }
        }['bind'](this);
    }
    function m(X, Y) {
        return function (Z, a0) {
            if (X == Z && Y in a0) {
                j['call'](this);
            }
        }['bind'](this);
    }
    function n(a1, a2, a3) {
        for (var a4 = 0x0; a4 < a1['length']; ++a4) {
            var a5 = a1[a4];
            var a6 = a5['get']('selectedIndex');
            if (a6 >= 0x0) {
                var a7 = a2['split']('.');
                var a8 = a5['get']('items')[a6];
                if (a3 !== undefined && !a3['call'](this, a8))
                    continue;
                for (var a9 = 0x0; a9 < a7['length']; ++a9) {
                    if (a8 == undefined)
                        return '';
                    a8 = 'get' in a8 ? a8['get'](a7[a9]) : a8[a7[a9]];
                }
                return a8;
            }
        }
        return '';
    }
    function o(aa, ab) {
        var ac = ab['get']('player');
        return ac !== undefined && ac['get']('viewerArea') == aa;
    }
}
var script = {"children":["this.MainViewer","this.HTMLText_6186D2E4_72B8_0BA9_41DA_6F43EF59B9C3","this.HTMLText_604765D9_72B8_0998_41D0_F326B1B0932F","this.HTMLText_60C27A9E_72B8_1B98_41A9_074733FD3637","this.HTMLText_60060715_72B8_0A6B_41B0_A0ACAD2178E5","this.IconButton_61FC8385_72B8_0A68_41DC_668730530340"],"propagateClick":false,"backgroundColorRatios":[0],"start":"this.init(); this.syncPlaylists([this.PlayList_61C2DAAB_72D8_7BB8_41CA_AA2B39BD3023,this.mainPlayList])","id":"rootPlayer","minHeight":0,"data":{"displayTooltipInTouchScreens":true,"locales":{"en":"locale/en.txt"},"history":{},"defaultLocale":"en","name":"Player536","textToSpeechConfig":{"pitch":1,"rate":1,"speechOnQuizQuestion":false,"volume":1,"speechOnInfoWindow":false,"stopBackgroundAudio":false,"speechOnTooltip":false}},"scrollBarMargin":2,"watermark":false,"minWidth":0,"backgroundColor":["#FFFFFF"],"defaultMenu":["fullscreen","mute","rotation"],"scrollBarColor":"#000000","class":"Player","init":"this.initQuiz(this.PlayList_61C2DAAB_72D8_7BB8_41CA_AA2B39BD3023, true, true); var quiz = this.get('data')['quiz']; quiz.bind('timeout', (function() { var functionCallee = function(){ this.quizShowTimeout({repeat: {visible: true}, score: {visible: true}}) }.bind(this); return functionCallee }.bind(this))()); quiz.bind('finish', (function() { var functionCallee = function(){ this.quizShowScore({canClose: true}) }.bind(this); return functionCallee }.bind(this))())","width":"100%","scripts":{"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"historyGoForward":TDV.Tour.Script.historyGoForward,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"openLink":TDV.Tour.Script.openLink,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"clone":TDV.Tour.Script.clone,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"initAnalytics":TDV.Tour.Script.initAnalytics,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"existsKey":TDV.Tour.Script.existsKey,"cloneBindings":TDV.Tour.Script.cloneBindings,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"unregisterKey":TDV.Tour.Script.unregisterKey,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"initQuiz":TDV.Tour.Script.initQuiz,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"downloadFile":TDV.Tour.Script.downloadFile,"getPixels":TDV.Tour.Script.getPixels,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"getComponentByName":TDV.Tour.Script.getComponentByName,"executeJS":TDV.Tour.Script.executeJS,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"isPanorama":TDV.Tour.Script.isPanorama,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"textToSpeech":TDV.Tour.Script.textToSpeech,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"shareSocial":TDV.Tour.Script.shareSocial,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"setValue":TDV.Tour.Script.setValue,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"init":TDV.Tour.Script.init,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"showPopupImage":TDV.Tour.Script.showPopupImage,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"playAudioList":TDV.Tour.Script.playAudioList,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"showWindow":TDV.Tour.Script.showWindow,"getMediaByName":TDV.Tour.Script.getMediaByName,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"quizFinish":TDV.Tour.Script.quizFinish,"startMeasurement":TDV.Tour.Script.startMeasurement,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"quizStart":TDV.Tour.Script.quizStart,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"getMainViewer":TDV.Tour.Script.getMainViewer,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"getOverlays":TDV.Tour.Script.getOverlays,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"resumePlayers":TDV.Tour.Script.resumePlayers,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"mixObject":TDV.Tour.Script.mixObject,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"quizShowScore":TDV.Tour.Script.quizShowScore,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"getKey":TDV.Tour.Script.getKey,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"createTween":TDV.Tour.Script.createTween,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"enableVR":TDV.Tour.Script.enableVR,"translate":TDV.Tour.Script.translate,"toggleVR":TDV.Tour.Script.toggleVR,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"disableVR":TDV.Tour.Script.disableVR,"historyGoBack":TDV.Tour.Script.historyGoBack,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"setMapLocation":TDV.Tour.Script.setMapLocation,"registerKey":TDV.Tour.Script.registerKey,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"setLocale":TDV.Tour.Script.setLocale},"height":"100%","hash": "2243faf1cf3c6249ad2ec9fa14320c65f0a2348711ad19e7b571906f021250de", "definitions": [{"arrowKeysAction":"translate","aaEnabled":true,"mouseControlMode":"drag_rotation","class":"PanoramaPlayer","touchControlMode":"drag_rotation","viewerArea":"this.MainViewer","displayPlaybackBar":true,"id":"MainViewerPanoramaPlayer","buttonCardboardView":"this.IconButton_61FC8385_72B8_0A68_41DC_668730530340"},{"class":"Panorama","label":trans('panorama_7E4513D2_72A8_09E9_41CB_49E88F07A9D2.label'),"frames":[{"class":"CubicPanoramaFrame","cube":{"class":"ImageResource","levels":[{"colCount":18,"width":9216,"url":"media/panorama_7E4513D2_72A8_09E9_41CB_49E88F07A9D2_0/{face}/0/{row}_{column}.jpg","tags":"ondemand","height":1536,"class":"TiledImageResourceLevel","rowCount":3},{"colCount":12,"width":6144,"url":"media/panorama_7E4513D2_72A8_09E9_41CB_49E88F07A9D2_0/{face}/1/{row}_{column}.jpg","tags":"ondemand","height":1024,"class":"TiledImageResourceLevel","rowCount":2},{"colCount":6,"width":3072,"url":"media/panorama_7E4513D2_72A8_09E9_41CB_49E88F07A9D2_0/{face}/2/{row}_{column}.jpg","tags":["ondemand","preload"],"height":512,"class":"TiledImageResourceLevel","rowCount":1}]},"thumbnailUrl":"media/panorama_7E4513D2_72A8_09E9_41CB_49E88F07A9D2_t.jpg"}],"hfov":360,"hfovMin":"150%","hfovMax":130,"id":"panorama_7E4513D2_72A8_09E9_41CB_49E88F07A9D2","thumbnailUrl":"media/panorama_7E4513D2_72A8_09E9_41CB_49E88F07A9D2_t.jpg","data":{"label":"scene1"},"overlays":["this.overlay_621ADBBB_72A8_F99F_41DC_06804D68695E","this.overlay_62F18D39_72A8_3E9B_41B1_527C1AC7A15F"],"cardboardMenu":"this.Menu_6399791B_72A8_069F_41D4_83B66AA480F2","vfov":180},{"rollOverBackgroundColor":"#000000","opacity":0.4,"fontFamily":"Arial","backgroundColor":"#404040","class":"Menu","children":["this.MenuItem_6024E5A7_72A8_09B7_41AF_0221D14ED89E"],"label":trans('Menu_6399791B_72A8_069F_41D4_83B66AA480F2.label'),"fontColor":"#FFFFFF","rollOverFontColor":"#FFFFFF","distance":2,"selectedFontColor":"#FFFFFF","rollOverOpacity":0.8,"selectedBackgroundColor":"#202020","id":"Menu_6399791B_72A8_069F_41D4_83B66AA480F2"},{"initialSequence":"this.sequence_7E263912_72A8_0668_41B5_AAC3CC6B0299","enterPointingToHorizon":true,"class":"PanoramaCamera","initialPosition":{"pitch":-3.65,"class":"PanoramaCameraPosition","yaw":86.09},"id":"panorama_7E4513D2_72A8_09E9_41CB_49E88F07A9D2_camera"},{"paddingBottom":10,"propagateClick":false,"borderSize":3,"minWidth":1,"id":"HTMLText_60060715_72B8_0A6B_41B0_A0ACAD2178E5","minHeight":1,"scrollBarMargin":2,"data":{"name":"HTMLText1580"},"right":"1.72%","paddingLeft":10,"backgroundOpacity":0,"scrollBarColor":"#000000","class":"HTMLText","paddingRight":10,"top":"2.43%","width":"16.168%","height":"7.387%","borderColor":"#000000","html":trans('HTMLText_60060715_72B8_0A6B_41B0_A0ACAD2178E5.html',null,{'quiz.time.remaining':regTextVar('HTMLText_60060715_72B8_0A6B_41B0_A0ACAD2178E5.html', 'quiz.time.remaining')}),"paddingTop":10},{"toolTipShadowColor":"#333138","propagateClick":false,"subtitlesTextShadowHorizontalLength":1,"playbackBarBackgroundColor":["#FFFFFF"],"progressBorderRadius":2,"playbackBarHeight":10,"firstTransitionDuration":0,"subtitlesTextShadowColor":"#000000","minHeight":50,"toolTipBackgroundColor":"#F6F6F6","subtitlesGap":0,"minWidth":100,"subtitlesBackgroundColor":"#000000","progressBarBackgroundColor":["#3399FF"],"playbackBarHeadWidth":6,"playbackBarProgressBorderSize":0,"playbackBarBackgroundColorDirection":"vertical","subtitlesTextShadowOpacity":1,"playbackBarRight":0,"progressBackgroundColor":["#000000"],"data":{"name":"Main Viewer"},"playbackBarProgressBorderRadius":0,"playbackBarProgressBackgroundColor":["#3399FF"],"playbackBarHeadShadowOpacity":0.7,"progressBottom":10,"progressLeft":"33%","progressHeight":2,"vrThumbstickRotationStep":20,"subtitlesFontColor":"#FFFFFF","surfaceReticleColor":"#FFFFFF","playbackBarProgressBackgroundColorRatios":[0],"toolTipFontSize":"1.11vmin","playbackBarBorderColor":"#FFFFFF","toolTipPaddingTop":4,"vrPointerSelectionColor":"#FF6600","playbackBarBorderRadius":0,"toolTipPaddingBottom":4,"toolTipPaddingLeft":6,"toolTipFontFamily":"Arial","subtitlesFontSize":"3vmin","playbackBarProgressBorderColor":"#000000","subtitlesBackgroundOpacity":0.2,"progressBarBorderSize":0,"progressBackgroundColorRatios":[0],"playbackBarHeadShadowBlurRadius":3,"surfaceReticleSelectionColor":"#FFFFFF","playbackBarHeadBorderRadius":0,"id":"MainViewer","progressBorderSize":0,"playbackBarLeft":0,"playbackBarBorderSize":0,"subtitlesBorderColor":"#FFFFFF","vrPointerSelectionTime":2000,"progressBarBorderRadius":2,"progressRight":"33%","playbackBarHeadHeight":15,"playbackBarHeadShadowColor":"#000000","progressOpacity":0.7,"toolTipFontColor":"#606060","subtitlesBottom":50,"playbackBarHeadBackgroundColorRatios":[0,1],"playbackBarHeadBorderColor":"#000000","toolTipBorderColor":"#767676","playbackBarHeadShadow":true,"playbackBarHeadBorderSize":0,"class":"ViewerArea","progressBarBackgroundColorDirection":"horizontal","subtitlesTextShadowVerticalLength":1,"progressBarBorderColor":"#000000","toolTipPaddingRight":6,"progressBarBackgroundColorRatios":[0],"playbackBarBackgroundOpacity":1,"subtitlesFontFamily":"Arial","width":"100%","playbackBarHeadBackgroundColor":["#111111","#666666"],"height":"100%","vrPointerColor":"#FFFFFF","toolTipTextShadowColor":"#000000","playbackBarBottom":5,"progressBorderColor":"#000000","subtitlesTop":0},{"paddingBottom":10,"propagateClick":false,"borderSize":3,"minWidth":1,"id":"HTMLText_604765D9_72B8_0998_41D0_F326B1B0932F","minHeight":1,"left":"1.5%","scrollBarMargin":2,"paddingLeft":10,"backgroundOpacity":0,"data":{"name":"HTMLText1580"},"scrollBarColor":"#000000","class":"HTMLText","paddingRight":10,"top":"1.32%","width":"20.025%","height":"9.923%","borderColor":"#000000","html":trans('HTMLText_604765D9_72B8_0998_41D0_F326B1B0932F.html',null,{'quiz.questions.answered':regTextVar('HTMLText_604765D9_72B8_0998_41D0_F326B1B0932F.html', 'quiz.questions.answered'),'quiz.question.count':regTextVar('HTMLText_604765D9_72B8_0998_41D0_F326B1B0932F.html', 'quiz.question.count')}),"paddingTop":10},{"propagateClick":false,"horizontalAlign":"center","backgroundColorRatios":[],"verticalAlign":"middle","minWidth":1,"id":"IconButton_61FC8385_72B8_0A68_41DC_668730530340","minHeight":1,"backgroundColor":[],"data":{"name":"IconButton10394"},"iconURL":"skin/IconButton_61FC8385_72B8_0A68_41DC_668730530340.png","right":"2.74%","tabIndex":0,"interactionEnabled":false,"backgroundOpacity":0.3,"class":"IconButton","bottom":"0.99%","width":138,"height":91},{"items":[{"camera":"this.panorama_7E4513D2_72A8_09E9_41CB_49E88F07A9D2_camera","player":"this.MainViewerPanoramaPlayer","media":"this.panorama_7E4513D2_72A8_09E9_41CB_49E88F07A9D2","class":"PanoramaPlayListItem","begin":"this.quizShowQuestion('question_63F534D9_72A8_0F98_41CA_EF2F8B381920').then(function(r){  if(r && r.length == 0) return;  }.bind(this)); this.quizShowQuestion('question_620BA9B2_72A8_39A9_41DA_16740DB3E7B5').then(function(r){  if(r && r.length == 0) return;  }.bind(this))","end":"this.trigger('tourEnded')"}],"class":"PlayList","id":"mainPlayList"},{"paddingBottom":10,"propagateClick":false,"borderSize":3,"minWidth":1,"id":"HTMLText_6186D2E4_72B8_0BA9_41DA_6F43EF59B9C3","minHeight":1,"left":"1.5%","scrollBarMargin":2,"paddingLeft":10,"backgroundOpacity":0,"data":{"name":"HTMLText1580"},"scrollBarColor":"#000000","class":"HTMLText","paddingRight":10,"top":"1.32%","width":"20.025%","height":"9.923%","borderColor":"#000000","html":trans('HTMLText_6186D2E4_72B8_0BA9_41DA_6F43EF59B9C3.html'),"paddingTop":10},{"paddingBottom":10,"propagateClick":false,"borderSize":3,"minWidth":1,"id":"HTMLText_60C27A9E_72B8_1B98_41A9_074733FD3637","minHeight":1,"left":"23.78%","scrollBarMargin":2,"paddingLeft":10,"backgroundOpacity":0,"data":{"name":"HTMLText1580"},"scrollBarColor":"#000000","class":"HTMLText","paddingRight":10,"top":"0.99%","width":"29.224%","height":"10.695%","borderColor":"#000000","html":trans('HTMLText_60C27A9E_72B8_1B98_41A9_074733FD3637.html',null,{'quiz.score':regTextVar('HTMLText_60C27A9E_72B8_1B98_41A9_074733FD3637.html', 'quiz.score'),'quiz.score.total':regTextVar('HTMLText_60C27A9E_72B8_1B98_41A9_074733FD3637.html', 'quiz.score.total')}),"paddingTop":10},{"items":[{"media":"this.panorama_7E4513D2_72A8_09E9_41CB_49E88F07A9D2","class":"PanoramaPlayListItem"}],"class":"PlayList","id":"PlayList_61C2DAAB_72D8_7BB8_41CA_AA2B39BD3023"},{"data":{"label":"Text"},"areas":["this.HotspotPanoramaOverlayArea_62452C14_72A8_FE69_419B_E5A6643FBCB7"],"class":"HotspotPanoramaOverlay","useHandCursor":true,"items":["this.HotspotPanoramaOverlayTextImage_623EEBB1_72A8_F9A8_41D5_EE84CC6C749D"],"maps":[],"id":"overlay_621ADBBB_72A8_F99F_41DC_06804D68695E","enabledInCardboard":true},{"data":{"label":"Text"},"areas":["this.HotspotPanoramaOverlayArea_62F46D4E_72A8_3EF9_41D7_61B0AE37B8D9"],"class":"HotspotPanoramaOverlay","useHandCursor":true,"items":["this.HotspotPanoramaOverlayTextImage_62F24D34_72A8_3EA9_418F_4C0187D1D1AE"],"maps":[],"id":"overlay_62F18D39_72A8_3E9B_41B1_527C1AC7A15F","enabledInCardboard":true},{"class":"MenuItem","click":"this.setPlayListSelectedIndex(this.mainPlayList, 0)","label":trans('MenuItem_6024E5A7_72A8_09B7_41AF_0221D14ED89E.label'),"id":"MenuItem_6024E5A7_72A8_09B7_41AF_0221D14ED89E"},{"movements":[{"easing":"cubic_in","class":"DistancePanoramaCameraMovement","yawDelta":18.5,"yawSpeed":7.96},{"class":"DistancePanoramaCameraMovement","yawDelta":323,"yawSpeed":7.96},{"easing":"cubic_out","class":"DistancePanoramaCameraMovement","yawDelta":18.5,"yawSpeed":7.96}],"class":"PanoramaCameraSequence","id":"sequence_7E263912_72A8_0668_41B5_AAC3CC6B0299"},{"mapColor":"any","class":"HotspotPanoramaOverlayArea","displayTooltipInTouchScreens":true,"id":"HotspotPanoramaOverlayArea_62452C14_72A8_FE69_419B_E5A6643FBCB7"},{"distance":50,"image":{"class":"ImageResource","levels":["this.imlevel_6107ED28_72A8_7EB9_41D8_2771A66AE6FC"]},"class":"HotspotPanoramaOverlayImage","id":"HotspotPanoramaOverlayTextImage_623EEBB1_72A8_F9A8_41D5_EE84CC6C749D","pitch":4.38,"hfov":54.94,"yaw":-87.28,"data":{"label":"Text"},"vfov":10.5},{"mapColor":"any","class":"HotspotPanoramaOverlayArea","displayTooltipInTouchScreens":true,"id":"HotspotPanoramaOverlayArea_62F46D4E_72A8_3EF9_41D7_61B0AE37B8D9"},{"distance":50,"image":{"class":"ImageResource","levels":["this.imlevel_61569D71_72A8_7EA8_41A5_1B53D63A8341"]},"class":"HotspotPanoramaOverlayImage","id":"HotspotPanoramaOverlayTextImage_62F24D34_72A8_3EA9_418F_4C0187D1D1AE","pitch":-1.15,"hfov":32.63,"yaw":-84.25,"data":{"label":"Text"},"vfov":10.5},{"width":1250.17,"url":trans('imlevel_6107ED28_72A8_7EB9_41D8_2771A66AE6FC.url'),"height":220.96,"class":"ImageResourceLevel","id":"imlevel_6107ED28_72A8_7EB9_41D8_2771A66AE6FC"},{"width":742.52,"url":trans('imlevel_61569D71_72A8_7EA8_41A5_1B53D63A8341.url'),"height":233.09,"class":"ImageResourceLevel","id":"imlevel_61569D71_72A8_7EA8_41A5_1B53D63A8341"}],"gap":10,"layout":"absolute"};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs;
script['data']['createQuizConfig'] = function () {
    var ad = {"data":{"titlesScale":1,"bodyScale":1},"questions":[{"options":[{"text":trans('questionOption_63196919_72A8_069B_41CA_0EC1D61BFB1C.text'),"id":"questionOption_63196919_72A8_069B_41CA_0EC1D61BFB1C","score":-1},{"text":trans('questionOption_636F7D77_72A8_3E97_41D3_622651E4E102.text'),"id":"questionOption_636F7D77_72A8_3E97_41D3_622651E4E102","score":1},{"text":trans('questionOption_63615F17_72A8_3A97_41D0_E3CB65741DED.text'),"id":"questionOption_63615F17_72A8_3A97_41D0_E3CB65741DED","score":-1}],"panorama":"this.panorama_7E4513D2_72A8_09E9_41CB_49E88F07A9D2","title":trans('question_63F534D9_72A8_0F98_41CA_EF2F8B381920.title'),"multipleChoice":false,"objective":"score1","canRepeat":true,"id":"question_63F534D9_72A8_0F98_41CA_EF2F8B381920","canClose":false},{"options":[{"text":trans('questionOption_7DAEED6F_72A8_3EB8_41D3_34AFCCBDC326.text'),"id":"questionOption_7DAEED6F_72A8_3EB8_41D3_34AFCCBDC326","score":1},{"text":trans('questionOption_7DE290CF_72A8_07F7_41DB_D7D47089605A.text'),"id":"questionOption_7DE290CF_72A8_07F7_41DB_D7D47089605A","score":0},{"text":trans('questionOption_7DFD7606_72A8_0A69_41CC_AD83E74D1728.text'),"id":"questionOption_7DFD7606_72A8_0A69_41CC_AD83E74D1728","score":-1}],"panorama":"this.panorama_7E4513D2_72A8_09E9_41CB_49E88F07A9D2","title":trans('question_620BA9B2_72A8_39A9_41DA_16740DB3E7B5.title'),"multipleChoice":false,"objective":"score1","canRepeat":true,"id":"question_620BA9B2_72A8_39A9_41DA_16740DB3E7B5","canClose":true}],"score":{"elapsedTime":{"label":trans('quizScore_7CFCBF65_72A9_FAAB_41CB_0A832553A18F.elapsedTime','quizScore_7CFCBF65_72A9_FAAB_41CB_0A832553A18F.elapsedTime.label'),"visible":true},"completion":{"label":trans('quizScore_7CFCBF65_72A9_FAAB_41CB_0A832553A18F.completion','quizScore_7CFCBF65_72A9_FAAB_41CB_0A832553A18F.completion.label'),"visible":true},"items":{"label":trans('quizScore_7CFCBF65_72A9_FAAB_41CB_0A832553A18F.items','quizScore_7CFCBF65_72A9_FAAB_41CB_0A832553A18F.items.label'),"visible":true},"downloadCSV":{"label":trans('quizScore_7CFCBF65_72A9_FAAB_41CB_0A832553A18F.downloadCSV','quizScore_7CFCBF65_72A9_FAAB_41CB_0A832553A18F.downloadCSV.label'),"visible":true},"submitToLMS":{"label":trans('quizScore_7CFCBF65_72A9_FAAB_41CB_0A832553A18F.submitToLMS','quizScore_7CFCBF65_72A9_FAAB_41CB_0A832553A18F.submitToLMS.label'),"visible":true},"questions":{"correctLabel":trans('quizScore_7CFCBF65_72A9_FAAB_41CB_0A832553A18F.questionsCorrect','quizScore_7CFCBF65_72A9_FAAB_41CB_0A832553A18F.questions.correctLabel'),"label":trans('quizScore_7CFCBF65_72A9_FAAB_41CB_0A832553A18F.questions','quizScore_7CFCBF65_72A9_FAAB_41CB_0A832553A18F.questions.label'),"visible":true,"incorrectLabel":trans('quizScore_7CFCBF65_72A9_FAAB_41CB_0A832553A18F.questionsIncorrect','quizScore_7CFCBF65_72A9_FAAB_41CB_0A832553A18F.questions.incorrectLabel')},"canClose":true,"description":trans('quizScore_7CFCBF65_72A9_FAAB_41CB_0A832553A18F.description'),"repeat":{"label":trans('quizScore_7CFCBF65_72A9_FAAB_41CB_0A832553A18F.repeat','quizScore_7CFCBF65_72A9_FAAB_41CB_0A832553A18F.repeat.label'),"visible":true},"id":"quizScore_7CFCBF65_72A9_FAAB_41CB_0A832553A18F","title":trans('quizScore_7CFCBF65_72A9_FAAB_41CB_0A832553A18F.title')},"objectives":[{"visibleInScore":true,"label":trans('score1.label'),"id":"score1"}],"theme":{"question":{"window":{"backgroundOpacity":1,"option":{"text":{"fontColor":"#FFFFFF","selected":{"fontColor":"#FFFFFF"}}},"mediaContainer":{"panoramaPlayer":{"touchControlMode":"drag_rotation","mouseControlMode":"drag_rotation"}},"title":{"fontColor":"#FFFFFF"},"backgroundColor":"#333333"}},"score":{"window":{"backgroundOpacity":1,"calification":{"fontColor":"#FFFFFF"},"title":{"fontColor":"#FFFFFF"},"backgroundColor":"#333333","stats":{"secondaryValue":{"fontColor":"#FFFFFF"},"mainValue":{"fontColor":"#FFFFFF"},"label":{"fontColor":"#FFFFFF"},"title":{"fontColor":"#FFFFFF"}},"description":{"fontColor":"#FFFFFF"}}},"timeout":{"window":{"backgroundOpacity":1,"icon":{"url":"data:image/png;base64,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"},"title":{"fontColor":"#FFFFFF"},"backgroundColor":"#333333"}}},"timeLimit":120,"autoFinish":true,"question":{"responseDisplayTime":2000,"ok":trans('quizQuestion_7CFADF64_72A9_FAA9_41C5_8D718C2A03A1.ok'),"scoreZeroIsIncorrect":true,"id":"quizQuestion_7CFADF64_72A9_FAA9_41C5_8D718C2A03A1"},"timeout":{"score":{"label":trans('quizTimeout_7CFAEF64_72A9_FAA9_41D7_C298E4BCBC3C.score','quizTimeout_7CFAEF64_72A9_FAA9_41D7_C298E4BCBC3C.score.label'),"visible":true},"title":trans('quizTimeout_7CFAEF64_72A9_FAA9_41D7_C298E4BCBC3C.title'),"repeat":{"label":trans('quizTimeout_7CFAEF64_72A9_FAA9_41D7_C298E4BCBC3C.repeat','quizTimeout_7CFAEF64_72A9_FAA9_41D7_C298E4BCBC3C.repeat.label'),"visible":false},"id":"quizTimeout_7CFAEF64_72A9_FAA9_41D7_C298E4BCBC3C"}};
    this['get']('data')['translateObjs'] = translateObjs;
    return ad;
};
TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device_v2024.0.19.js.map
})();
//Generated with v2024.0.19, Thu Nov 28 2024