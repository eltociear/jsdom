// jscs:disable maximumLineLength
"use strict";
const path = require("path");
const runWebPlatformTest = require("./run-web-platform-test")(exports, path.resolve(__dirname, "tests"));

[
  "dom/nodes/CharacterData-appendData.html",
  "dom/nodes/CharacterData-deleteData.html",
  "dom/nodes/CharacterData-insertData.html",
  "dom/nodes/CharacterData-replaceData.html",
  "dom/nodes/Document-contentType/contentType/createHTMLDocument.html",
  "dom/nodes/Document-createComment.html",
  "dom/nodes/Document-createProcessingInstruction.html",
  "dom/nodes/Document-createProcessingInstruction.xhtml",
  "dom/nodes/Document-createTextNode.html",
  "dom/nodes/Document-implementation.html",
  "dom/nodes/DocumentType-literal.html",
  "dom/nodes/DocumentType-literal.xhtml",
  "dom/nodes/DOMImplementation-createDocumentType.html",
  "dom/nodes/DOMImplementation-createHTMLDocument.html",
  "dom/nodes/DOMImplementation-hasFeature.html",
  "dom/nodes/Element-classlist.html",
  "dom/nodes/Element-getElementsByClassName.html",
  "dom/nodes/attributes.html",
  "dom/nodes/getElementsByClassName-01.htm",
  "dom/nodes/getElementsByClassName-02.htm",
  "dom/nodes/getElementsByClassName-03.htm",
  "dom/nodes/getElementsByClassName-04.htm",
  "dom/nodes/getElementsByClassName-05.htm",
  "dom/nodes/getElementsByClassName-06.htm",
  "dom/nodes/getElementsByClassName-07.htm",
  "dom/nodes/getElementsByClassName-08.htm",
  "dom/nodes/getElementsByClassName-09.htm",
  "dom/nodes/getElementsByClassName-10.xml",
  // "dom/nodes/getElementsByClassName-11.xml", // XML class attribute and localName and namespaces don't work well
  "dom/nodes/getElementsByClassName-12.htm",
  "dom/nodes/getElementsByClassName-13.htm",
  "dom/nodes/getElementsByClassName-14.htm",
  "dom/nodes/getElementsByClassName-15.htm",
  "dom/nodes/getElementsByClassName-16.htm",
  "dom/nodes/getElementsByClassName-17.htm",
  "dom/nodes/getElementsByClassName-18.htm",
  "dom/nodes/getElementsByClassName-19.htm",
  "dom/nodes/getElementsByClassName-20.htm",
  "dom/nodes/getElementsByClassName-21.htm",
  "dom/nodes/getElementsByClassName-22.htm",
  "dom/nodes/getElementsByClassName-23.htm",
  "dom/nodes/getElementsByClassName-24.htm",
  "dom/nodes/getElementsByClassName-25.htm",
  "dom/nodes/getElementsByClassName-26.htm",
  "dom/nodes/getElementsByClassName-27.htm",
  "dom/nodes/getElementsByClassName-28.htm",
  "dom/nodes/getElementsByClassName-29.htm",
  "dom/nodes/getElementsByClassName-30.htm",
  "dom/nodes/getElementsByClassName-31.htm",
  "dom/nodes/Node-baseURI.html",
  "dom/nodes/Node-cloneNode.html",
  "dom/traversal/NodeFilter-constants.html",
  "dom/traversal/NodeIterator.html",
  "html/dom/dynamic-markup-insertion/document-writeln/document.writeln-02.html",
  "html/dom/dynamic-markup-insertion/document-writeln/document.writeln-03.html",
  "html/dom/elements/global-attributes/classlist-nonstring.html",
  "html/infrastructure/urls/terminology-0/document-base-url.html",
  "html/semantics/forms/the-input-element/input-textselection-01.html",
  // "html/semantics/scripting-1/the-template-element/additions-to-parsing-xhtml-documents/node-document.html", // templates in XHTML are totally messed up
  // "html/semantics/scripting-1/the-template-element/additions-to-parsing-xhtml-documents/template-child-nodes.html", // templates in XHTML are totally messed up
  // "html/semantics/scripting-1/the-template-element/additions-to-serializing-xhtml-documents/outerhtml.html", // templates in XHTML are totally messed up
  "html/semantics/scripting-1/the-template-element/additions-to-the-steps-to-clone-a-node/template-clone-children.html",
  "html/semantics/scripting-1/the-template-element/additions-to-the-steps-to-clone-a-node/templates-copy-document-owner.html",
  // "html/semantics/scripting-1/the-template-element/definitions/template-contents-owner-document-type.html", // requires @@toStringTag
  // "html/semantics/scripting-1/the-template-element/definitions/template-contents-owner-test-001.html", // template content owner document semantics not yet implemented
  // "html/semantics/scripting-1/the-template-element/definitions/template-contents-owner-test-002.html", // template content owner document semantics not yet implemented
  // "html/semantics/scripting-1/the-template-element/definitions/template-contents.html", // requires @@toStringTag
  "html/semantics/scripting-1/the-template-element/innerhtml-on-templates/innerhtml.html",
  "html/semantics/scripting-1/the-template-element/serializing-html-templates/outerhtml.html",
  "html/semantics/scripting-1/the-template-element/template-element/content-attribute.html",
  // "html/semantics/scripting-1/the-template-element/template-element/node-document-changes.html", // template content owner document semantics not yet implemented
  // "html/semantics/scripting-1/the-template-element/template-element/template-as-a-descendant.html", // template parsing not quite perfect yet
  "html/semantics/scripting-1/the-template-element/template-element/template-content-node-document.html",
  "html/semantics/scripting-1/the-template-element/template-element/template-content.html",
  "html/semantics/scripting-1/the-template-element/template-element/template-descendant-body.html",
  "html/semantics/scripting-1/the-template-element/template-element/template-descendant-frameset.html",
  "html/semantics/scripting-1/the-template-element/template-element/template-descendant-head.html",
  "html/syntax/serializing-html-fragments/outerHTML.html",
  // "html/syntax/parsing/html5lib_template.html", // no idea what's going on here
  "html/syntax/parsing/template/additions-to-foster-parenting/template-is-a-foster-parent-element.html",
  "html/syntax/parsing/template/additions-to-foster-parenting/template-is-not-a-foster-parent-element.html",
  "html/syntax/parsing/template/additions-to-the-in-body-insertion-mode/generating-of-implied-end-tags.html",
  "html/syntax/parsing/template/additions-to-the-in-body-insertion-mode/ignore-body-token.html",
  "html/syntax/parsing/template/additions-to-the-in-body-insertion-mode/ignore-frameset-token.html",
  "html/syntax/parsing/template/additions-to-the-in-body-insertion-mode/ignore-head-token.html",
  "html/syntax/parsing/template/additions-to-the-in-body-insertion-mode/ignore-html-token.html",
  "html/syntax/parsing/template/additions-to-the-in-body-insertion-mode/start-tag-body.html",
  "html/syntax/parsing/template/additions-to-the-in-body-insertion-mode/start-tag-html.html",
  "html/syntax/parsing/template/additions-to-the-in-body-insertion-mode/template-end-tag-without-start-one.html",
  // "html/syntax/parsing/template/additions-to-the-in-frameset-insertion-mode/end-tag-frameset.html", // template parsing not quite perfect yet
  "html/syntax/parsing/template/additions-to-the-in-head-insertion-mode/generating-of-implied-end-tags.html",
  "html/syntax/parsing/template/additions-to-the-in-head-insertion-mode/template-end-tag-without-start-one.html",
  "html/syntax/parsing/template/additions-to-the-in-table-insertion-mode/end-tag-table.html",
  "html/syntax/parsing/template/appending-to-a-template/template-child-nodes.html",
  "html/syntax/parsing/template/clearing-the-stack-back-to-a-given-context/clearing-stack-back-to-a-table-body-context.html",
  "html/syntax/parsing/template/clearing-the-stack-back-to-a-given-context/clearing-stack-back-to-a-table-context.html",
  "html/syntax/parsing/template/clearing-the-stack-back-to-a-given-context/clearing-stack-back-to-a-table-row-context.html",
  // "html/syntax/parsing/template/creating-an-element-for-the-token/template-owner-document.html", // template content owner document semantics not yet implemented
  "html/webappapis/atob/base64.html",

  "dom/events/Event-constants.html",
  "dom/events/Event-defaultPrevented.html",
  "dom/events/Event-dispatch-bubbles-false.html",
  "dom/events/Event-dispatch-handlers-changed.html",
  "dom/events/Event-dispatch-omitted-capture.html",
  "dom/events/Event-dispatch-propagation-stopped.html",
  "dom/events/Event-dispatch-reenter.html",
  "dom/events/Event-dispatch-target-moved.html",
  "dom/events/Event-dispatch-target-removed.html",
  "dom/events/Event-initEvent.html",
  "dom/events/Event-propagation.html",
  "dom/events/Event-type.html",
  "dom/events/Event-type-empty.html",
  "dom/events/EventTarget-addEventListener.html",
  "dom/events/EventTarget-dispatchEvent-returnvalue.html",
  "dom/events/EventTarget-dispatchEvent.html",
  "dom/events/EventTarget-removeEventListener.html",
  "dom/events/ProgressEvent.html",

  "DOMEvents/ClickFakeEvent.nondocument.html",
  "DOMEvents/event-phases-order.html",
  "DOMEvents/throwing-in-listener-and-window-error-event.html",
  "DOMEvents/throwing-in-listener-when-all-have-not-run-yet.html",

  "FileAPI/fileReader.html",
  "FileAPI/blob/Blob-slice.html",
  "FileAPI/file/File-constructor.html",
  "FileAPI/FileReader/Progress_event_bubbles_cancelable.html",
  "FileAPI/reading-data-section/FileReader-event-handler-attributes.html",
  "FileAPI/reading-data-section/filereader_abort.html",
  "FileAPI/reading-data-section/filereader_error.html",
  "FileAPI/reading-data-section/filereader_readAsArrayBuffer.html",
  "FileAPI/reading-data-section/filereader_readAsDataURL.html",
  "FileAPI/reading-data-section/filereader_readAsText.html",
  "FileAPI/reading-data-section/filereader_readystate.html",
  "FileAPI/reading-data-section/filereader_result.html",
  "XMLHttpRequest/FormData-append.html",
  "XMLHttpRequest/abort-after-receive.htm",
  "XMLHttpRequest/abort-after-send.htm",
  "XMLHttpRequest/abort-after-stop.htm",
  "XMLHttpRequest/abort-after-timeout.htm",
  "XMLHttpRequest/abort-during-done.htm",
  "XMLHttpRequest/abort-during-open.htm",
  "XMLHttpRequest/abort-during-unsent.htm",
  "XMLHttpRequest/abort-during-upload.htm",
  "XMLHttpRequest/abort-event-abort.htm",
  "XMLHttpRequest/abort-event-listeners.htm",
  "XMLHttpRequest/abort-event-loadend.htm",
  "XMLHttpRequest/abort-event-order.htm",
  "XMLHttpRequest/abort-upload-event-abort.htm",
  "XMLHttpRequest/abort-upload-event-loadend.htm",
  "XMLHttpRequest/anonymous-mode-unsupported.htm",
  "XMLHttpRequest/data-uri.htm",
  "XMLHttpRequest/event-abort.htm",
  // "XMLHttpRequest/event-error.html", // broken on Windows; works on Travis
  "XMLHttpRequest/event-load.htm",
  "XMLHttpRequest/event-loadend.htm",
  "XMLHttpRequest/event-loadstart.htm",
  "XMLHttpRequest/event-progress.htm",
  "XMLHttpRequest/event-readystatechange-loaded.htm",
  "XMLHttpRequest/event-timeout.htm",
  "XMLHttpRequest/event-upload-progress-crossorigin.sub.htm",
  "XMLHttpRequest/event-upload-progress.htm",
  "XMLHttpRequest/formdata-blob.htm",
  "XMLHttpRequest/formdata.htm",
  "XMLHttpRequest/getallresponseheaders-cookies.htm",
  "XMLHttpRequest/getallresponseheaders-status.htm",
  "XMLHttpRequest/getresponseheader-case-insensitive.htm",
  "XMLHttpRequest/getresponseheader-chunked-trailer.htm",
  "XMLHttpRequest/getresponseheader-cookies-and-more.htm",
  "XMLHttpRequest/getresponseheader-error-state.htm",
  "XMLHttpRequest/getresponseheader-server-date.htm",
  "XMLHttpRequest/getresponseheader-special-characters.htm",
  "XMLHttpRequest/getresponseheader-unsent-opened-state.htm",
  "XMLHttpRequest/open-after-abort.htm",
  "XMLHttpRequest/open-after-setrequestheader.htm",
  "XMLHttpRequest/open-during-abort.htm",
  "XMLHttpRequest/open-method-bogus.htm",
  "XMLHttpRequest/open-method-insecure.htm",
  "XMLHttpRequest/open-method-responsetype-set-sync.htm",
  "XMLHttpRequest/open-open-send.htm",
  "XMLHttpRequest/open-open-sync-send.htm",
  "XMLHttpRequest/open-referer.htm",
  "XMLHttpRequest/open-send-open.htm",
  "XMLHttpRequest/open-sync-open-send.htm",
  "XMLHttpRequest/open-url-about-blank-window.htm",
  "XMLHttpRequest/open-url-base.htm",
  "XMLHttpRequest/open-url-base-inserted.htm",
  "XMLHttpRequest/open-url-base-inserted-after-open.htm",
  "XMLHttpRequest/open-url-fragment.htm",
  "XMLHttpRequest/open-url-javascript-window-2.htm",
  "XMLHttpRequest/open-url-javascript-window.htm",
  "XMLHttpRequest/open-user-password-non-same-origin.htm",
  "XMLHttpRequest/overridemimetype-done-state.htm",
  "XMLHttpRequest/overridemimetype-loading-state.htm",
  "XMLHttpRequest/overridemimetype-open-state-force-xml.htm",
  "XMLHttpRequest/progress-events-response-data-gzip.htm",
  "XMLHttpRequest/response-data-arraybuffer.htm",
  "XMLHttpRequest/response-data-blob.htm",
  "XMLHttpRequest/response-data-gzip.htm",
  "XMLHttpRequest/response-data-progress.htm",
  "XMLHttpRequest/response-invalid-responsetype.htm",
  "XMLHttpRequest/response-json.htm",
  "XMLHttpRequest/response-method.htm",
  "XMLHttpRequest/responseText-status.html",
  "XMLHttpRequest/responsetype.html",
  "XMLHttpRequest/responsexml-non-document-types.htm",
  "XMLHttpRequest/send-accept-language.htm",
  "XMLHttpRequest/send-accept.htm",
  "XMLHttpRequest/send-authentication-basic-repeat-no-args.htm",
  "XMLHttpRequest/send-authentication-basic-setrequestheader-existing-session.htm",
  "XMLHttpRequest/send-authentication-basic-setrequestheader.htm",
  "XMLHttpRequest/send-authentication-basic.htm",
  "XMLHttpRequest/send-conditional.htm",
  "XMLHttpRequest/send-data-arraybuffer.htm",
  "XMLHttpRequest/send-data-blob.htm",
  "XMLHttpRequest/send-data-es-object.htm",
  "XMLHttpRequest/send-data-formdata.htm",
  "XMLHttpRequest/send-entity-body-basic.htm",
  "XMLHttpRequest/send-entity-body-empty.htm",
  "XMLHttpRequest/send-entity-body-get-head-async.htm",
  "XMLHttpRequest/send-entity-body-get-head.htm",
  "XMLHttpRequest/send-entity-body-none.htm",
  // "XMLHttpRequest/send-network-error-async-events.sub.htm", // broken on Windows; works on Travis
  // "XMLHttpRequest/send-network-error-sync-events.sub.htm", // broken on Windows; works on Travis
  "XMLHttpRequest/send-no-response-event-loadend.htm",
  "XMLHttpRequest/send-no-response-event-loadstart.htm",
  "XMLHttpRequest/send-no-response-event-order.htm",
  "XMLHttpRequest/send-redirect-bogus-sync.htm",
  //  "XMLHttpRequest/send-redirect-bogus.htm", // broken on Windows; works on Travis
  "XMLHttpRequest/send-redirect-no-location.htm",
  "XMLHttpRequest/send-response-event-order.htm",
  "XMLHttpRequest/send-response-upload-event-loadend.htm",
  "XMLHttpRequest/send-response-upload-event-loadstart.htm",
  "XMLHttpRequest/send-response-upload-event-progress.htm",
  "XMLHttpRequest/send-send.htm",
  "XMLHttpRequest/send-sync-blocks-async.htm",
  "XMLHttpRequest/send-sync-no-response-event-load.htm",
  "XMLHttpRequest/send-sync-no-response-event-loadend.htm",
  "XMLHttpRequest/send-sync-no-response-event-order.htm",
  "XMLHttpRequest/send-sync-response-event-order.htm",
  "XMLHttpRequest/send-sync-timeout.htm",
  "XMLHttpRequest/send-timeout-events.htm",
  "XMLHttpRequest/setrequestheader-after-send.htm",
  "XMLHttpRequest/setrequestheader-allow-empty-value.htm",
  "XMLHttpRequest/setrequestheader-allow-whitespace-in-value.htm",
  "XMLHttpRequest/setrequestheader-before-open.htm",
  "XMLHttpRequest/setrequestheader-bogus-name.htm",
  "XMLHttpRequest/setrequestheader-bogus-value.htm",
  "XMLHttpRequest/setrequestheader-case-insensitive.htm",
  "XMLHttpRequest/setrequestheader-content-type.htm",
  "XMLHttpRequest/setrequestheader-header-forbidden.htm",
  "XMLHttpRequest/setrequestheader-open-setrequestheader.htm",
  "XMLHttpRequest/status-async.htm",
  "XMLHttpRequest/status-basic.htm",
  "XMLHttpRequest/status-error.htm",
  "XMLHttpRequest/timeout-sync.htm",
  "XMLHttpRequest/xmlhttprequest-basic.htm",
  "XMLHttpRequest/xmlhttprequest-eventtarget.htm",
  "XMLHttpRequest/xmlhttprequest-unsent.htm"
]
.forEach(runWebPlatformTest);
