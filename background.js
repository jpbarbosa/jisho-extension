chrome.runtime.onInstalled.addListener(() =>
  chrome.contextMenus.create({
    title: 'Open Jisho for "%s"',
    contexts: ["selection"],
    id: "myContextMenuId",
  })
);

chrome.contextMenus.onClicked.addListener((info, tab) => {
  const path = info.selectionText.length > 2 ? info.selectionText : `${info.selectionText} #kanji`;
  return chrome.tabs.create({
    url: `https://jisho.org/search/${encodeURIComponent(path)}`
  });
});
