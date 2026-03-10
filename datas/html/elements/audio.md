# <audio>: The Embed Audio element

Source: https://devdocs.io/html/reference/elements/audio

The <audio> HTML element is used to embed sound content in documents. It may contain one or more audio sources, represented using the src attribute or the <source> element: the browser will choose the most suitable one. It can also be the destination for streamed media, using a MediaStream.

## Try it

```
<figure>
  <figcaption>Listen to the T-Rex:</figcaption>
  <audio controls src="/shared-assets/audio/t-rex-roar.mp3"></audio>
  <a href="/shared-assets/audio/t-rex-roar.mp3"> Download audio </a>
</figure>
```

```
figure {
  margin: 0;
}
```

The above example shows basic usage of the <audio> element. In a similar manner to the <img> element, we include a path to the media we want to embed inside the src attribute; we can include other attributes to specify information such as whether we want it to autoplay and loop, whether we want to show the browser's default audio controls, etc.

The content inside the opening and closing <audio></audio> tags is shown as a fallback in browsers that don't support the element.

## Attributes

This element's attributes include the global attributes.

A Boolean attribute: if specified, the audio will automatically begin playback as soon as it can do so, without waiting for the entire audio file to finish downloading.

Note: Sites that automatically play audio (or videos with an audio track) can be an unpleasant experience for users, so should be avoided when possible. If you must offer autoplay functionality, you should make it opt-in (requiring a user to specifically enable it). However, this can be useful when creating media elements whose source will be set at a later time, under user control. See our autoplay guide for additional information about how to properly use autoplay.

If this attribute is present, the browser will offer controls to allow the user to control audio playback, including volume, seeking, and pause/resume playback.

The controlslist attribute, when specified, helps the browser select what controls to show for the audio element whenever the browser shows its own set of controls (that is, when the controls attribute is specified).

The allowed values are nodownload, nofullscreen and noremoteplayback.

This enumerated attribute indicates whether to use CORS to fetch the related audio file. CORS-enabled resources can be reused in the <canvas> element without being tainted. The allowed values are:

Sends a cross-origin request without a credential. In other words, it sends the Origin: HTTP header without a cookie, X.509 certificate, or performing HTTP Basic authentication. If the server does not give credentials to the origin site (by not setting the Access-Control-Allow-Origin: HTTP header), the resource will be tainted, and its usage restricted.

Sends a cross-origin request with a credential. In other words, it sends the Origin: HTTP header with a cookie, a certificate, or performing HTTP Basic authentication. If the server does not give credentials to the origin site (through Access-Control-Allow-Credentials: HTTP header), the resource will be tainted and its usage restricted.

When not present, the resource is fetched without a CORS request (i.e., without sending the Origin: HTTP header), preventing its non-tainted use in <canvas> elements. If invalid, it is handled as if the enumerated keyword anonymous was used. See CORS settings attributes for additional information.

A Boolean attribute used to disable the capability of remote playback in devices that are attached using wired (HDMI, DVI, etc.) and wireless technologies (Miracast, Chromecast, DLNA, AirPlay, etc.). See the proposed Remote Playback API specification for more information.

In Safari, you can use x-webkit-airplay="deny" as a fallback.

A Boolean attribute: if specified, the audio player will automatically seek back to the start upon reaching the end of the audio.

A Boolean attribute that indicates whether the audio will be initially silenced. Its default value is false.

This enumerated attribute is intended to provide a hint to the browser about what the author thinks will lead to the best user experience. It may have one of the following values:

- none: Indicates that the audio should not be preloaded.
- metadata: Indicates that only audio metadata (e.g., length) is fetched.
- auto: Indicates that the whole audio file can be downloaded, even if the user is not expected to use it.
- empty string: A synonym of the auto value.

The default value is different for each browser. The spec advises it to be set to metadata.

Note:

- The autoplay attribute has precedence over preload. If autoplay is specified, the browser would obviously need to start downloading the audio for playback.
- The browser is not forced by the specification to follow the value of this attribute; it is a mere hint.

The URL of the audio to embed. This is subject to HTTP access controls. This is optional; you may instead use the <source> element within the audio block to specify the audio to embed.

## Events

## Usage notes

Browsers don't all support the same file types and audio codecs; you can provide multiple sources inside nested <source> elements, and the browser will then use the first one it understands:

```
<audio controls>
  <source src="myAudio.mp3" type="audio/mpeg" />
  <source src="myAudio.ogg" type="audio/ogg" />
  <p>
    Download <a href="myAudio.mp3" download="myAudio.mp3">MP3</a> or
    <a href="myAudio.ogg" download="myAudio.ogg">OGG</a> audio.
  </p>
</audio>
```

The audio source can be set to any valid URL, including HTTP(S) URLs and Data URLs. When using HTTP(S) URLs, be aware that the browser's caching behavior will affect how often the file is requested from the server. Data URLs embed the audio data directly in the HTML, which can be useful for small audio files but isn't recommended for larger files as it increases the HTML file size.

When using <source> elements, the browser attempts to load each source sequentially. If a source fails (e.g., due to an invalid URL or unsupported format), the next source is attempted, and so on. An error event fires on the <audio> element after all sources have failed; error events are not fired on each individual <source> element.

You can also use the Web Audio API to directly generate and manipulate audio streams from JavaScript code rather than streaming pre-existing audio files. You can set the srcObject in JavaScript to a MediaStream object. This is commonly used for live audio streams or real-time audio processing.

```
const audioElement = document.querySelector("audio");
navigator.mediaDevices
  .getUserMedia({ audio: true })
  .then((stream) => {
    audioElement.srcObject = stream;
  })
  .catch((error) => {
    console.error("Error accessing the microphone", error);
  });
```

Note that MediaStream sources have limitations: they are not seekable and only support a limited set of codecs.

We offer a substantive and thorough guide to media file types and the audio codecs that can be used within them. Also available is a guide to the codecs supported for video.

Other usage notes:

- If you don't specify the controls attribute, the audio player won't include the browser's default controls. You can, however, create your own custom controls using JavaScript and the HTMLMediaElement API.
- To allow precise control over your audio content, HTMLMediaElements fire many different events. This also provides a way to monitor the audio's fetching process so you can watch for errors or detect when enough is available to begin to play or manipulate it.
- <audio> elements can't have subtitles or captions associated with them in the same way that <video> elements can. See WebVTT and Audio by Ian Devlin for some useful information and workarounds.
- To test the fallback content on browsers that support the element, you can replace <audio> with a non-existing element like <notanaudio>.

A good general source of information on using HTML <audio> is the HTML video and audio beginner's tutorial.

### Styling with CSS

The <audio> element has no intrinsic visual output of its own unless the controls attribute is specified, in which case the browser's default controls are shown.

The default controls have a display value of inline by default, and it is often a good idea to set the value to block to improve control over positioning and layout, unless you want it to sit within a text block or similar.

You can style the default controls with properties that affect the block as a single unit, so for example you can give it a border and border-radius, padding, margin, etc. You can't however style the individual components inside the audio player (e.g., change the button size or icons, change the font, etc.), and the controls are different across the different browsers.

To get a consistent look and feel across browsers, you'll need to create custom controls; these can be marked up and styled in whatever way you want, and then JavaScript can be used along with the HTMLMediaElement API to wire up their functionality.

Video player styling basics provides some useful styling techniques — it is written in the context of <video>, but much of it is equally applicable to <audio>.

### Detecting addition and removal of tracks

You can detect when tracks are added to and removed from an <audio> element using the addtrack and removetrack events. However, these events aren't sent directly to the <audio> element itself. Instead, they're sent to the track list object within the <audio> element's HTMLMediaElement that corresponds to the type of track that was added to the element:

An AudioTrackList containing all of the media element's audio tracks. You can add a listener for addtrack to this object to be alerted when new audio tracks are added to the element.

Add an addtrack listener to this VideoTrackList object to be informed when video tracks are added to the element.

Add an addtrack event listener to this TextTrackList to be notified when new text tracks are added to the element.

Note: Even though it's an <audio> element, it still has video and text track lists, and can in fact be used to present video, although the user interface implications can be odd.

For example, to detect when audio tracks are added to or removed from an <audio> element, you can use code like this:

```
const elem = document.querySelector("audio");

elem.audioTrackList.onaddtrack = (event) => {
  trackEditor.addTrack(event.track);
};

elem.audioTrackList.onremovetrack = (event) => {
  trackEditor.removeTrack(event.track);
};
```

This code watches for audio tracks to be added to and removed from the element, and calls a hypothetical function on a track editor to register and remove the track from the editor's list of available tracks.

You can also use addEventListener() to listen for the addtrack and removetrack events.

## Accessibility

Audio with spoken dialog should provide both captions and transcripts that accurately describe its content. Captions, which are specified using WebVTT, allow people who are hearing impaired to understand an audio recording's content as the recording is being played, while transcripts allow people who need additional time to be able to review the recording's content at a pace and format that is comfortable for them.

If automatic captioning services are used, it is important to review the generated content to ensure it accurately represents the source audio.

The <audio> element doesn't directly support WebVTT. You will have to find a library or framework that provides the capability for you, or write the code to display captions yourself. One option is to play your audio using a <video> element, which does support WebVTT.

In addition to spoken dialog, subtitles and transcripts should also identify music and sound effects that communicate important information. This includes emotion and tone. For example, in the WebVTT below, note the use of square brackets to provide tone and emotional insight to the viewer; this can help establish the mood otherwise provided using music, nonverbal sounds and crucial sound effects, and so forth.

```
1
00:00:00 --> 00:00:45
[Energetic techno music]

2
00:00:46 --> 00:00:51
Welcome to the Time Keeper's podcast! In this episode we're discussing which Swisswatch is a wrist switchwatch?

16
00:00:52 --> 00:01:02
[Laughing] Sorry! I mean, which wristwatch is a Swiss wristwatch?
```

Also it's a good practice to provide some content (such as the direct download link) as a fallback for viewers who use a browser in which the <audio> element is not supported:

```
<audio controls>
  <source src="myAudio.mp3" type="audio/mpeg" />
  <source src="myAudio.ogg" type="audio/ogg" />
  <p>
    Download <a href="myAudio.mp3">MP3</a> or
    <a href="myAudio.ogg" download="myAudio.ogg">OGG</a> audio.
  </p>
</audio>
```

- Web Video Text Tracks Format (WebVTT)
- WebAIM: Captions, Transcripts, and Audio Descriptions
- MDN Understanding WCAG, Guideline 1.2 explanations
- Understanding Success Criterion 1.2.1 | W3C Understanding WCAG 2.0
- Understanding Success Criterion 1.2.2 | W3C Understanding WCAG 2.0

## Examples

### Basic usage

The following example shows basic usage of the <audio> element to play an OGG file. It will autoplay due to the autoplay attribute—if the page has permission to do so—and also includes fallback content.

```
<!-- Basic audio playback -->
<audio src="AudioTest.ogg" autoplay>
  <a href="AudioTest.ogg" download="AudioTest.ogg">Download OGG audio</a>.
</audio>
```

For details on when autoplay works, how to get permission to use autoplay, and how and when it's appropriate to use autoplay, see our autoplay guide.

### <audio> element with <source> element

This example specifies which audio track to embed using the src attribute on a nested <source> element rather than directly on the <audio> element. It is always useful to include the file's MIME type inside the type attribute, as the browser is able to instantly tell if it can play that file, and not waste time on it if not.

```
<audio controls>
  <source src="foo.wav" type="audio/wav" />
  <a href="foo.wav" download="foo.wav">Download WAV audio</a>.
</audio>
```

### <audio> with multiple <source> elements

This example includes multiple <source> elements. The browser tries to load the first source element (Opus) if it is able to play it; if not it falls back to the second (Vorbis) and finally back to MP3:

```
<audio controls>
  <source src="foo.opus" type="audio/ogg; codecs=opus" />
  <source src="foo.ogg" type="audio/ogg; codecs=vorbis" />
  <source src="foo.mp3" type="audio/mpeg" />
</audio>
```

## Technical summary

## Specifications

## Browser compatibility

## See also

- Web media technologies
  - Media container formats (file types)
  - Guide to audio codecs used on the web
- Web Audio API
- HTMLAudioElement
- <source>
- <video>
- Learning area: HTML video and audio
- Cross-browser audio basics

Web media technologies

- Media container formats (file types)
- Guide to audio codecs used on the web

Web Audio API

Learning area: HTML video and audio

Cross-browser audio basics

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/audio
