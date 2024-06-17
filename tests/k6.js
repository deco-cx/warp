import { check, sleep } from "k6";
import http from "k6/http";

const data = `<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link
    rel="modulepreload"
    href="/_frsh/js/23d7a5fd9627e01d1ed21d67f4a41eeb2440812a/deserializer.js"
  />
  <link
    rel="modulepreload"
    href="/_frsh/js/23d7a5fd9627e01d1ed21d67f4a41eeb2440812a/main.js"
  />
  <link
    rel="modulepreload"
    href="/_frsh/js/23d7a5fd9627e01d1ed21d67f4a41eeb2440812a/chunk-QRP5LTWK.js"
  />
  <link
    rel="modulepreload"
    href="/_frsh/js/23d7a5fd9627e01d1ed21d67f4a41eeb2440812a/chunk-PSRUSLG7.js"
  />
  <link
    rel="modulepreload"
    href="/_frsh/js/23d7a5fd9627e01d1ed21d67f4a41eeb2440812a/island-header_drawers.js"
  />
  <link
    rel="modulepreload"
    href="/_frsh/js/23d7a5fd9627e01d1ed21d67f4a41eeb2440812a/chunk-JTKOZ3NN.js"
  />
  <link
    rel="modulepreload"
    href="/_frsh/js/23d7a5fd9627e01d1ed21d67f4a41eeb2440812a/chunk-DPJGEYRC.js"
  />
  <link
    rel="modulepreload"
    href="/_frsh/js/23d7a5fd9627e01d1ed21d67f4a41eeb2440812a/chunk-SQA36RBC.js"
  />
  <link
    rel="modulepreload"
    href="/_frsh/js/23d7a5fd9627e01d1ed21d67f4a41eeb2440812a/chunk-AH6UNYI4.js"
  />
  <link
    rel="modulepreload"
    href="/_frsh/js/23d7a5fd9627e01d1ed21d67f4a41eeb2440812a/chunk-5OPEMIJ4.js"
  />
  <link
    rel="modulepreload"
    href="/_frsh/js/23d7a5fd9627e01d1ed21d67f4a41eeb2440812a/chunk-HOZ45Y4T.js"
  />
  <link
    rel="modulepreload"
    href="/_frsh/js/23d7a5fd9627e01d1ed21d67f4a41eeb2440812a/chunk-F3CUDOFC.js"
  />
  <link
    rel="modulepreload"
    href="/_frsh/js/23d7a5fd9627e01d1ed21d67f4a41eeb2440812a/chunk-HPMM2MA2.js"
  />
  <link
    rel="modulepreload"
    href="/_frsh/js/23d7a5fd9627e01d1ed21d67f4a41eeb2440812a/chunk-N6RKSCUF.js"
  />
  <link
    rel="modulepreload"
    href="/_frsh/js/23d7a5fd9627e01d1ed21d67f4a41eeb2440812a/island-header_buttons.js"
  />
  <link
    rel="modulepreload"
    href="/_frsh/js/23d7a5fd9627e01d1ed21d67f4a41eeb2440812a/island-header_searchbar.js"
  />
  <link
    rel="modulepreload"
    href="/_frsh/js/23d7a5fd9627e01d1ed21d67f4a41eeb2440812a/chunk-VONEOIKZ.js"
  />
  <link
    rel="modulepreload"
    href="/_frsh/js/23d7a5fd9627e01d1ed21d67f4a41eeb2440812a/chunk-BXQYK45G.js"
  />
  <link
    rel="modulepreload"
    href="/_frsh/js/23d7a5fd9627e01d1ed21d67f4a41eeb2440812a/chunk-4QFPFODB.js"
  />
  <link
    rel="modulepreload"
    href="/_frsh/js/23d7a5fd9627e01d1ed21d67f4a41eeb2440812a/chunk-UYDWTN42.js"
  />
  <link
    rel="modulepreload"
    href="/_frsh/js/23d7a5fd9627e01d1ed21d67f4a41eeb2440812a/chunk-3IZDVV5H.js"
  />
  <link
    rel="modulepreload"
    href="/_frsh/js/23d7a5fd9627e01d1ed21d67f4a41eeb2440812a/chunk-O242OY54.js"
  />
  <link
    rel="modulepreload"
    href="/_frsh/js/23d7a5fd9627e01d1ed21d67f4a41eeb2440812a/chunk-D4VVQX26.js"
  />
  <link
    rel="modulepreload"
    href="/_frsh/js/23d7a5fd9627e01d1ed21d67f4a41eeb2440812a/chunk-BYCZJO75.js"
  />
  <link
    rel="modulepreload"
    href="/_frsh/js/23d7a5fd9627e01d1ed21d67f4a41eeb2440812a/chunk-DMG27ZD2.js"
  />
  <link
    rel="modulepreload"
    href="/_frsh/js/23d7a5fd9627e01d1ed21d67f4a41eeb2440812a/chunk-NTGPEYA2.js"
  />
  <link
    rel="modulepreload"
    href="/_frsh/js/23d7a5fd9627e01d1ed21d67f4a41eeb2440812a/chunk-IFVSBC7K.js"
  />
  <link
    rel="modulepreload"
    href="/_frsh/js/23d7a5fd9627e01d1ed21d67f4a41eeb2440812a/chunk-IQ5XWF7Z.js"
  />
  <link
    rel="modulepreload"
    href="/_frsh/js/23d7a5fd9627e01d1ed21d67f4a41eeb2440812a/chunk-WDHHZHIL.js"
  />
  <link
    rel="modulepreload"
    href="/_frsh/js/23d7a5fd9627e01d1ed21d67f4a41eeb2440812a/chunk-65D4G3U5.js"
  />
  <link
    rel="modulepreload"
    href="/_frsh/js/23d7a5fd9627e01d1ed21d67f4a41eeb2440812a/island-header_cart_vtex.js"
  />
  <link
    rel="modulepreload"
    href="/_frsh/js/23d7a5fd9627e01d1ed21d67f4a41eeb2440812a/chunk-6AFI2S4V.js"
  />
  <link
    rel="modulepreload"
    href="/_frsh/js/23d7a5fd9627e01d1ed21d67f4a41eeb2440812a/chunk-LKT3BYKK.js"
  />
  <link
    rel="modulepreload"
    href="/_frsh/js/23d7a5fd9627e01d1ed21d67f4a41eeb2440812a/island-newsletter.js"
  />
  <style type="text/css" id="__DESIGN_SYSTEM_VARS-P0-0">
    * {
      --font-family: ;
      --p: 100% 0 0deg;
      --pc: 31% 0 0deg;
      --s: 100% 0 0deg;
      --sc: 31% 0 0deg;
      --a: 100% 0 0deg;
      --ac: 31% 0 0deg;
      --n: 100% 0 0deg;
      --nc: 31% 0 0deg;
      --b1: 100% 0 0deg;
      --b2: 93% 0 0deg;
      --b3: 86% 0 0deg;
      --bc: 31% 0 0deg;
      --su: 91% 0.15 195deg;
      --suc: 29% 0.03 195deg;
      --wa: 100% 0 0deg;
      --wac: 31% 0 0deg;
      --er: 100% 0 0deg;
      --erc: 31% 0 0deg;
      --in: 100% 0 0deg;
      --inc: 31% 0 0deg;
      --rounded-box: 1rem;
      --rounded-btn: 0.2rem;
      --rounded-badge: 1.9rem;
      --animation-btn: 0.25s;
      --animation-input: 0.2s;
      --btn-focus-scale: 0.95;
      --border-btn: 1px;
      --tab-border: 1px;
      --tab-radius: 0.5rem;
      --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
        Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
    }
  </style>
  <meta name="view-transition" content="same-origin" />
  <link
    href="/styles.css?revision=1717243547306&amp;__frsh_c=23d7a5fd9627e01d1ed21d67f4a41eeb2440812a"
    rel="stylesheet"
  />
  <link
    rel="manifest"
    href="/site.webmanifest?__frsh_c=23d7a5fd9627e01d1ed21d67f4a41eeb2440812a"
  />
  <meta name="robots" content="noindex, nofollow" />
  <script
    defer=""
    src="data:text/javascript;base64,ZGVjb2RlVVJJQ29tcG9uZW50KGVzY2FwZSgoKGxpdmUpPT57CiAgY29uc3Qgb25LZXlkb3duID0gKGV2ZW50KT0+ewogICAgLy8gaW4gY2FzZSBsb2FkZWQgaW4gaWZyYW1lLCBhdm9pZCByZWRpcmVjdGluZyB0byBlZGl0b3Igd2hpbGUgaW4gZWRpdG9yCiAgICBpZiAoZ2xvYmFsVGhpcy53aW5kb3cgIT09IGdsb2JhbFRoaXMud2luZG93LnBhcmVudCkgewogICAgICByZXR1cm47CiAgICB9CiAgICAvLyBEaXNhYmxlIGdvaW5nIHRvIGFkbWluIHdoaWxlIGlucHV0IGl0IGJlaW5nIHR5cGVkCiAgICBpZiAoZXZlbnQudGFyZ2V0ICE9PSBkb2N1bWVudC5ib2R5KSB7CiAgICAgIHJldHVybjsKICAgIH0KICAgIGlmIChldmVudC5kZWZhdWx0UHJldmVudGVkKSB7CiAgICAgIHJldHVybjsKICAgIH0KICAgIGlmIChldmVudC5jdHJsS2V5ICYmIGV2ZW50LnNoaWZ0S2V5ICYmIGV2ZW50LmtleSA9PT0gIkUiIHx8IGV2ZW50LmtleSA9PT0gIi4iKSB7CiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7CiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpOwogICAgICBjb25zdCBwYXRobmFtZSA9IGAvY2hvb3NlLWVkaXRvcj9zaXRlPSR7Z2xvYmFsVGhpcy53aW5kb3cuTElWRS5zaXRlLm5hbWV9JmRvbWFpbj0ke2dsb2JhbFRoaXMud2luZG93LmxvY2F0aW9uLm9yaWdpbn0mcGFnZUlkPSR7Z2xvYmFsVGhpcy53aW5kb3cuTElWRS5wYWdlLmlkfWA7CiAgICAgIGNvbnN0IGhyZWYgPSBuZXcgVVJMKHBhdGhuYW1lLCAiaHR0cHM6Ly9hZG1pbi5kZWNvLmN4Iik7CiAgICAgIGhyZWYuc2VhcmNoUGFyYW1zLnNldCgicGF0aCIsIGVuY29kZVVSSUNvbXBvbmVudChgJHtnbG9iYWxUaGlzLndpbmRvdy5sb2NhdGlvbi5wYXRobmFtZX0ke2dsb2JhbFRoaXMud2luZG93LmxvY2F0aW9uLnNlYXJjaH1gKSk7CiAgICAgIGhyZWYuc2VhcmNoUGFyYW1zLnNldCgicGF0aFRlbXBsYXRlIiwgZW5jb2RlVVJJQ29tcG9uZW50KGdsb2JhbFRoaXMud2luZG93LkxJVkUucGFnZS5wYXRoVGVtcGxhdGUgfHwgIi8qIikpOwogICAgICBpZiAoKGV2ZW50LmN0cmxLZXkgfHwgZXZlbnQubWV0YUtleSkgJiYgZXZlbnQua2V5ID09PSAiLiIpIHsKICAgICAgICBnbG9iYWxUaGlzLndpbmRvdy5vcGVuKGhyZWYsICJfYmxhbmsiKTsKICAgICAgICByZXR1cm47CiAgICAgIH0KICAgICAgZ2xvYmFsVGhpcy53aW5kb3cubG9jYXRpb24uaHJlZiA9IGAke2hyZWZ9YDsKICAgIH0KICB9OwogIGNvbnN0IG9uTWVzc2FnZSA9IChldmVudCk9PnsKICAgIGNvbnN0IHsgZGF0YSB9ID0gZXZlbnQ7CiAgICBzd2l0Y2goZGF0YS50eXBlKXsKICAgICAgY2FzZSAiZWRpdG9yOjppbmplY3QiOgogICAgICAgIHsKICAgICAgICAgIHJldHVybiBldmFsKGRhdGEuYXJncy5zY3JpcHQpOwogICAgICAgIH0KICAgIH0KICB9OwogIC8vQHRzLWlnbm9yZTogIkRvbUluc3BlY3RvciBub3QgYXZhaWxhYmxlIgogIGNvbnN0IGluc3BlY3RvciA9IHR5cGVvZiBEb21JbnNwZWN0b3IgIT09ICJ1bmRlZmluZWQiICYmIC8vQHRzLWlnbm9yZTogIkRvbUluc3BlY3RvciBub3QgYXZhaWxhYmxlIgogIG5ldyBEb21JbnNwZWN0b3IoZG9jdW1lbnQuYm9keSwgewogICAgb3V0bGluZTogIjFweCBkYXNoZWQgIzJmZDA4MCIsCiAgICBiYWNrZ3JvdW5kQ29sb3I6ICJyZ2JhKDQ3LCAyMDgsIDEyOCwgMC4zMykiLAogICAgYmFja2dyb3VuZEJsZW5kTW9kZTogIm11bHRpcGx5IiwKICAgIGFjdGl2YXRvcjogRG9tSW5zcGVjdG9yQWN0aXZhdG9ycy5CYWNrcXVvdGUsCiAgICBwYXRoOiAiL2xpdmUvaW5zcGVjdCIKICB9KTsKICAvKiogU2V0dXAgZ2xvYmFsIHZhcmlhYmxlcyAqLyBnbG9iYWxUaGlzLndpbmRvdy5MSVZFID0gewogICAgLi4uZ2xvYmFsVGhpcy53aW5kb3cuTElWRSwKICAgIC4uLmxpdmUKICB9OwogIC8qKiBTZXR1cCBsaXN0ZW5lcnMgKi8gaWYgKCFsaXZlLmF2b2lkUmVkaXJlY3RpbmdUb0VkaXRvcikgewogICAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCJrZXlkb3duIiwgb25LZXlkb3duKTsKICB9CiAgLy8gbmF2aWdhdGUgdG8gYWRtaW4gd2hlbiB1c2VyIGNsaWNrcyBjdHJsK3NoaWZ0K2UKICAvLyBmb2N1cyBlbGVtZW50IHdoZW4gaW5zaWRlIGFkbWluCiAgYWRkRXZlbnRMaXN0ZW5lcigibWVzc2FnZSIsIG9uTWVzc2FnZSk7Cn0pKHsicGFnZSI6eyJpZCI6InBhZ2VzLWhvbWUtYzRiY2JmYjc3MWU5IiwicGF0aFRlbXBsYXRlIjoiLyJ9LCJzaXRlIjp7ImlkIjowLCJuYW1lIjoic3RvcmVmcm9udC12dGV4In0sImZsYWdzIjpbeyJuYW1lIjoiVGVzdGUgQUIiLCJ2YWx1ZSI6dHJ1ZSwiaXNTZWdtZW50Ijp0cnVlfV0sInBsYXkiOmZhbHNlfSkpKQ=="
    nonce=""
  ></script>
  <script nonce=""></script>
  <script
    defer=""
    id="deco-events"
    src="data:text/javascript;base64,ZGVjb2RlVVJJQ29tcG9uZW50KGVzY2FwZSgoKHsgZGVjbzogeyBwYWdlIH0sIHNlZ21lbnRDb29raWUgfSk9PnsKICBjb25zdCBjb29raWUgPSBkb2N1bWVudC5jb29raWU7CiAgY29uc3Qgb3V0ID0ge307CiAgaWYgKGNvb2tpZSAhPT0gbnVsbCkgewogICAgY29uc3QgYyA9IGNvb2tpZS5zcGxpdCgiOyIpOwogICAgZm9yIChjb25zdCBrdiBvZiBjKXsKICAgICAgY29uc3QgW2Nvb2tpZUtleSwgLi4uY29va2llVmFsXSA9IGt2LnNwbGl0KCI9Iik7CiAgICAgIGNvbnN0IGtleSA9IGNvb2tpZUtleS50cmltKCk7CiAgICAgIG91dFtrZXldID0gY29va2llVmFsLmpvaW4oIj0iKTsKICAgIH0KICB9CiAgY29uc3QgZmxhZ3MgPSBbXTsKICBpZiAob3V0W3NlZ21lbnRDb29raWVdKSB7CiAgICB0cnkgewogICAgICBjb25zdCBzZWdtZW50ID0gSlNPTi5wYXJzZShkZWNvZGVVUklDb21wb25lbnQoYXRvYihvdXRbc2VnbWVudENvb2tpZV0pKSk7CiAgICAgIHNlZ21lbnQuYWN0aXZlPy5mb3JFYWNoKChmbGFnKT0+ZmxhZ3MucHVzaCh7CiAgICAgICAgICBuYW1lOiBmbGFnLAogICAgICAgICAgdmFsdWU6IHRydWUKICAgICAgICB9KSk7CiAgICAgIHNlZ21lbnQuaW5hY3RpdmVEcmF3bj8uZm9yRWFjaCgoZmxhZyk9PmZsYWdzLnB1c2goewogICAgICAgICAgbmFtZTogZmxhZywKICAgICAgICAgIHZhbHVlOiBmYWxzZQogICAgICAgIH0pKTsKICAgIH0gY2F0Y2ggIHsKICAgICAgY29uc29sZS5lcnJvcigiRXJyb3IgcGFyc2luZyBkZWNvX3NlZ21lbnQgY29va2llIik7CiAgICB9CiAgfQogIGNvbnN0IHRhcmdldCA9IG5ldyBFdmVudFRhcmdldCgpOwogIGNvbnN0IGRpc3BhdGNoID0gKGV2ZW50KT0+ewogICAgdGFyZ2V0LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCJhbmFseXRpY3MiLCB7CiAgICAgIGRldGFpbDogZXZlbnQKICAgIH0pKTsKICB9OwogIGNvbnN0IHN1YnNjcmliZSA9IChoYW5kbGVyLCBvcHRzKT0+ewogICAgLy8gZGVuby1saW50LWlnbm9yZSBuby1leHBsaWNpdC1hbnkKICAgIGNvbnN0IGNiID0gKHsgZGV0YWlsIH0pPT5oYW5kbGVyKGRldGFpbCk7CiAgICBoYW5kbGVyKHsKICAgICAgbmFtZTogImRlY28iLAogICAgICBwYXJhbXM6IHsKICAgICAgICBmbGFncywKICAgICAgICBwYWdlCiAgICAgIH0KICAgIH0pOwogICAgdGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoImFuYWx5dGljcyIsIGNiLCBvcHRzKTsKICAgIHJldHVybiAoKT0+ewogICAgICB0YXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcigiYW5hbHl0aWNzIiwgY2IsIG9wdHMpOwogICAgfTsKICB9OwogIGdsb2JhbFRoaXMud2luZG93LkRFQ09fU0lURVNfU1REID0gewogICAgc2VuZEFuYWx5dGljc0V2ZW50OiBkaXNwYXRjaAogIH07CiAgZ2xvYmFsVGhpcy53aW5kb3cuREVDTyA9IHsKICAgIC4uLmdsb2JhbFRoaXMud2luZG93LkRFQ08sCiAgICBldmVudHM6IHsKICAgICAgZGlzcGF0Y2gsCiAgICAgIHN1YnNjcmliZQogICAgfQogIH07Cn0pKHsiZGVjbyI6eyJmbGFncyI6W3sibmFtZSI6IlRlc3RlIEFCIiwidmFsdWUiOnRydWUsImlzU2VnbWVudCI6dHJ1ZX1dLCJwYWdlIjp7ImlkIjoicGFnZXMtaG9tZS1jNGJjYmZiNzcxZTkiLCJwYXRoVGVtcGxhdGUiOiIvIn19LCJzZWdtZW50Q29va2llIjoiZGVjb19zZWdtZW50In0pKSk="
    nonce=""
  ></script>
  <link rel="dns-prefetch" href="https://plausible.io/api/event" />
  <link
    rel="preconnect"
    href="https://plausible.io/api/event"
    crossorigin="anonymous"
  />
  <script
    defer=""
    data-exclude="/proxy"
    data-api="https://plausible.io/api/event"
    src="https://plausible.io/js/script.manual.js"
    nonce=""
  ></script>
  <script
    defer=""
    src="data:text/javascript;base64,ZGVjb2RlVVJJQ29tcG9uZW50KGVzY2FwZSgoKCk9PnsKICAvLyBGbGFncyBhbmQgYWRkaXRpb25hbCBkaW1lbnRpb25zCiAgY29uc3QgcHJvcHMgPSB7fTsKICBjb25zdCB0cmFja1BhZ2V2aWV3ID0gKCk9Pmdsb2JhbFRoaXMud2luZG93LnBsYXVzaWJsZT8uKCJwYWdldmlldyIsIHsKICAgICAgcHJvcHMKICAgIH0pOwogIC8vIEF0dGFjaCBwdXNoU3RhdGUgYW5kIHBvcFN0YXRlIGxpc3RlbmVycwogIGNvbnN0IG9yaWdpbmFsUHVzaFN0YXRlID0gaGlzdG9yeS5wdXNoU3RhdGU7CiAgaWYgKG9yaWdpbmFsUHVzaFN0YXRlKSB7CiAgICBoaXN0b3J5LnB1c2hTdGF0ZSA9IGZ1bmN0aW9uKCkgewogICAgICAvLyBAdHMtaWdub3JlIG1vbmtleSBwYXRjaAogICAgICBvcmlnaW5hbFB1c2hTdGF0ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpOwogICAgICB0cmFja1BhZ2V2aWV3KCk7CiAgICB9OwogICAgYWRkRXZlbnRMaXN0ZW5lcigicG9wc3RhdGUiLCB0cmFja1BhZ2V2aWV3KTsKICB9CiAgLy8gMjAwMCBieXRlcyBsaW1pdAogIGNvbnN0IHRydW5jYXRlID0gKHN0cik9PmAke3N0cn1gLnNsaWNlKDAsIDk5MCk7CiAgLy8gc2V0dXAgcGxhdXNpYmxlIHNjcmlwdCBhbmQgdW5zdWJzY3JpYmUKICBnbG9iYWxUaGlzLndpbmRvdy5ERUNPLmV2ZW50cy5zdWJzY3JpYmUoKGV2ZW50KT0+ewogICAgaWYgKCFldmVudCB8fCBldmVudC5uYW1lICE9PSAiZGVjbyIpIHJldHVybjsKICAgIGlmIChldmVudC5wYXJhbXMpIHsKICAgICAgY29uc3QgeyBmbGFncywgcGFnZSB9ID0gZXZlbnQucGFyYW1zOwogICAgICBpZiAoQXJyYXkuaXNBcnJheShmbGFncykpIHsKICAgICAgICBmb3IgKGNvbnN0IGZsYWcgb2YgZmxhZ3MpewogICAgICAgICAgcHJvcHNbZmxhZy5uYW1lXSA9IHRydW5jYXRlKGZsYWcudmFsdWUudG9TdHJpbmcoKSk7CiAgICAgICAgfQogICAgICB9CiAgICAgIHByb3BzWyJwYWdlSWQiXSA9IHRydW5jYXRlKGAke3BhZ2UuaWR9YCk7CiAgICB9CiAgICB0cmFja1BhZ2V2aWV3KCk7CiAgfSkoKTsKICBnbG9iYWxUaGlzLndpbmRvdy5ERUNPLmV2ZW50cy5zdWJzY3JpYmUoKGV2ZW50KT0+ewogICAgaWYgKCFldmVudCkgcmV0dXJuOwogICAgY29uc3QgeyBuYW1lLCBwYXJhbXMgfSA9IGV2ZW50OwogICAgaWYgKCFuYW1lIHx8ICFwYXJhbXMgfHwgbmFtZSA9PT0gImRlY28iKSByZXR1cm47CiAgICBjb25zdCB2YWx1ZXMgPSB7CiAgICAgIC4uLnByb3BzCiAgICB9OwogICAgZm9yKGNvbnN0IGtleSBpbiBwYXJhbXMpewogICAgICAvLyBAdHMtZXhwZWN0LWVycm9yIHNvbWVob3cgdHlwZXNjcmlwdCBidWdzCiAgICAgIGNvbnN0IHZhbHVlID0gcGFyYW1zW2tleV07CiAgICAgIGlmICh2YWx1ZSAhPT0gbnVsbCAmJiB2YWx1ZSAhPT0gdW5kZWZpbmVkKSB7CiAgICAgICAgdmFsdWVzW2tleV0gPSB0cnVuY2F0ZSh0eXBlb2YgdmFsdWUgIT09ICJvYmplY3QiID8gdmFsdWUgOiBKU09OLnN0cmluZ2lmeSh2YWx1ZSkpOwogICAgICB9CiAgICB9CiAgICBnbG9iYWxUaGlzLndpbmRvdy5wbGF1c2libGU/LihuYW1lLCB7CiAgICAgIHByb3BzOiB2YWx1ZXMKICAgIH0pOwogIH0pOwp9KSgpKSk="
    nonce=""
  ></script>
  <script
    defer=""
    src="data:text/javascript;base64,ZGVjb2RlVVJJQ29tcG9uZW50KGVzY2FwZSgoKGV4dGVuc2lvbnMpPT57CiAgaWYgKGV4dGVuc2lvbnMubGVuZ3RoID4gMCkgewogICAgZG9jdW1lbnQuYm9keS5zZXRBdHRyaWJ1dGUoImh4LWV4dCIsIGV4dGVuc2lvbnMuam9pbigiLCIpKTsKICB9Cn0pKFtdKSkp"
    nonce=""
  ></script>
  <script
    defer=""
    src="https://cdn.jsdelivr.net/npm/htmx.org@1.9.12"
    crossorigin="anonymous"
    nonce=""
  ></script>
  <style type="text/css">
    @font-face {
      font-family: "Poppins";
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(/live/invoke/website/loaders/asset.ts?src=https://fonts.gstatic.com/s/poppins/v21/pxiEyp8kv8JHgFVrFJA.ttf)
        format("truetype");
    }
    @font-face {
      font-family: "Poppins";
      font-style: normal;
      font-weight: 600;
      font-display: swap;
      src: url(/live/invoke/website/loaders/asset.ts?src=https://fonts.gstatic.com/s/poppins/v21/pxiByp8kv8JHgFVrLEj6V1s.ttf)
        format("truetype");
    }
    @font-face {
      font-family: "Poppins";
      font-style: normal;
      font-weight: 700;
      font-display: swap;
      src: url(/live/invoke/website/loaders/asset.ts?src=https://fonts.gstatic.com/s/poppins/v21/pxiByp8kv8JHgFVrLCz7V1s.ttf)
        format("truetype");
    }

    /* latin-ext */
    @font-face {
      font-family: "Poppins";
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(/live/invoke/website/loaders/asset.ts?src=https://fonts.gstatic.com/s/poppins/v21/pxiEyp8kv8JHgFVrJJnecnFHGPezSQ.woff2)
        format("woff2");
      unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F,
        U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F,
        U+A720-A7FF;
    }
    /* latin */
    @font-face {
      font-family: "Poppins";
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(/live/invoke/website/loaders/asset.ts?src=https://fonts.gstatic.com/s/poppins/v21/pxiEyp8kv8JHgFVrJJfecnFHGPc.woff2)
        format("woff2");
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6,
        U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC,
        U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }
    /* latin-ext */
    @font-face {
      font-family: "Poppins";
      font-style: normal;
      font-weight: 600;
      font-display: swap;
      src: url(/live/invoke/website/loaders/asset.ts?src=https://fonts.gstatic.com/s/poppins/v21/pxiByp8kv8JHgFVrLEj6Z1JlFd2JQEl8qw.woff2)
        format("woff2");
      unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F,
        U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F,
        U+A720-A7FF;
    }
    /* latin */
    @font-face {
      font-family: "Poppins";
      font-style: normal;
      font-weight: 600;
      font-display: swap;
      src: url(/live/invoke/website/loaders/asset.ts?src=https://fonts.gstatic.com/s/poppins/v21/pxiByp8kv8JHgFVrLEj6Z1xlFd2JQEk.woff2)
        format("woff2");
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6,
        U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC,
        U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }
    /* latin-ext */
    @font-face {
      font-family: "Poppins";
      font-style: normal;
      font-weight: 700;
      font-display: swap;
      src: url(/live/invoke/website/loaders/asset.ts?src=https://fonts.gstatic.com/s/poppins/v21/pxiByp8kv8JHgFVrLCz7Z1JlFd2JQEl8qw.woff2)
        format("woff2");
      unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F,
        U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F,
        U+A720-A7FF;
    }
    /* latin */
    @font-face {
      font-family: "Poppins";
      font-style: normal;
      font-weight: 700;
      font-display: swap;
      src: url(/live/invoke/website/loaders/asset.ts?src=https://fonts.gstatic.com/s/poppins/v21/pxiByp8kv8JHgFVrLCz7Z1xlFd2JQEk.woff2)
        format("woff2");
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6,
        U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC,
        U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }
  </style>
  <style type="text/css" id="__DESIGN_SYSTEM_VARS-P0-1">
    @media (prefers-color-scheme: light) {
      * {
        --font-family: Poppins;
        --p: 40% 0.03 221deg;
        --pc: 88% 0.01 222deg;
        --s: 94% 0.08 91deg;
        --sc: 30% 0.02 89deg;
        --a: 94% 0.08 91deg;
        --ac: 30% 0.02 89deg;
        --n: 98% 0 0deg;
        --nc: 98% 0 0deg;
        --b1: 100% 0 0deg;
        --b2: 100% 0 0deg;
        --b3: 100% 0 0deg;
        --bc: 31% 0 0deg;
        --su: 91% 0.15 195deg;
        --suc: 29% 0.03 195deg;
        --wa: 71% 0.16 69deg;
        --wac: 25% 0.04 72deg;
        --er: 100% 0 0deg;
        --erc: 31% 0 0deg;
        --in: 100% 0 0deg;
        --inc: 31% 0 0deg;
        --rounded-box: 1rem;
        --rounded-btn: 0.2rem;
        --rounded-badge: 1.9rem;
        --animation-btn: 0.25s;
        --animation-input: 0.2s;
        --btn-focus-scale: 0.95;
        --border-btn: 1px;
        --tab-border: 1px;
        --tab-radius: 0.5rem;
        --font-family: Poppins;
      }
    }
  </style>
  <link
    as="image"
    rel="preload"
    href="https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/2291/c007e481-b1c6-4122-9761-5c3e554512c1"
    imagesrcset="/live/invoke/website/loaders/image.ts?src=https%3A%2F%2Fozksgdmyrqcxcwhnbepg.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fassets%2F2291%2Fc007e481-b1c6-4122-9761-5c3e554512c1&amp;fit=cover&amp;width=430&amp;height=590 430w, /live/invoke/website/loaders/image.ts?src=https%3A%2F%2Fozksgdmyrqcxcwhnbepg.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fassets%2F2291%2Fc007e481-b1c6-4122-9761-5c3e554512c1&amp;fit=cover&amp;width=860&amp;height=1180 860w"
    fetchpriority="high"
    media="(max-width: 767px)"
  />
  <link
    as="image"
    rel="preload"
    href="https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/2291/d057fc10-5616-4f12-8d4c-201bb47a81f5"
    imagesrcset="/live/invoke/website/loaders/image.ts?src=https%3A%2F%2Fozksgdmyrqcxcwhnbepg.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fassets%2F2291%2Fd057fc10-5616-4f12-8d4c-201bb47a81f5&amp;fit=cover&amp;width=1440&amp;height=600 1440w, /live/invoke/website/loaders/image.ts?src=https%3A%2F%2Fozksgdmyrqcxcwhnbepg.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fassets%2F2291%2Fd057fc10-5616-4f12-8d4c-201bb47a81f5&amp;fit=cover&amp;width=2880&amp;height=1200 2880w"
    fetchpriority="high"
    media="(min-width: 768px)"
  />
  <link
    rel="prefetch"
    href="/deco/render?props=%7B%7D&amp;href=https%3A%2F%2Fstorefront-vtex.deco.site%2F&amp;pathTemplate=%2F&amp;renderSalt=0&amp;framework=fresh&amp;resolveChain=%5B2%2C%22website%2Fhandlers%2Ffresh.ts%22%2C0%2C%22page%22%2C2%2C%22resolved%22%2C1%2C%22pages-home-c4bcbfb771e9%22%2C2%2C%22website%2Fpages%2FPage.tsx%22%2C0%2C%22sections%22%2C0%2C%225%22%5D&amp;fresh-partial=true&amp;partialMode=replace"
    as="document"
  />
  <link
    rel="prefetch"
    href="/deco/render?props=%7B%7D&amp;href=https%3A%2F%2Fstorefront-vtex.deco.site%2F&amp;pathTemplate=%2F&amp;renderSalt=00&amp;framework=fresh&amp;resolveChain=%5B2%2C%22website%2Fhandlers%2Ffresh.ts%22%2C0%2C%22page%22%2C2%2C%22resolved%22%2C1%2C%22pages-home-c4bcbfb771e9%22%2C2%2C%22website%2Fpages%2FPage.tsx%22%2C0%2C%22sections%22%2C0%2C%228%22%2C2%2C%22site%2Fsections%2FProduct%2FShelfWithImage.tsx%22%2C0%2C%22section%22%5D&amp;fresh-partial=true&amp;partialMode=replace"
    as="document"
  />
  <link
    rel="prefetch"
    href="/deco/render?props=%7B%7D&amp;href=https%3A%2F%2Fstorefront-vtex.deco.site%2F&amp;pathTemplate=%2F&amp;renderSalt=0&amp;framework=fresh&amp;resolveChain=%5B2%2C%22website%2Fhandlers%2Ffresh.ts%22%2C0%2C%22page%22%2C2%2C%22resolved%22%2C1%2C%22pages-home-c4bcbfb771e9%22%2C2%2C%22website%2Fpages%2FPage.tsx%22%2C0%2C%22sections%22%2C0%2C%229%22%5D&amp;fresh-partial=true&amp;partialMode=replace"
    as="document"
  />
  <script
    type="text/javascript"
    src="chrome-extension://mdnleldcmiljblolnjhpnblkcekpdkpa/libs/customElements.js"
    class="__REQUESTLY__SCRIPT"
  ></script>
  <script
    async=""
    src="https://cdn.jsdelivr.net/npm/search-insights@2.9.0/dist/search-insights.min.js"
  ></script>
  <style>
    .htmx-indicator {
      opacity: 0;
    }
    .htmx-request .htmx-indicator {
      opacity: 1;
      transition: opacity 200ms ease-in;
    }
    .htmx-request.htmx-indicator {
      opacity: 1;
      transition: opacity 200ms ease-in;
    }
  </style>
</head>
<body>
  <section
    id="2242712787-4"
    data-manifest-key="website/sections/Analytics/Analytics.tsx"
  >
    <script
      defer=""
      id="analytics-script"
      src="data:text/javascript;base64,ZGVjb2RlVVJJQ29tcG9uZW50KGVzY2FwZSgoKCk9PnsKICBnbG9iYWxUaGlzLndpbmRvdy5ERUNPLmV2ZW50cy5zdWJzY3JpYmUoKGV2ZW50KT0+ewogICAgZ2xvYmFsVGhpcy53aW5kb3cuZGF0YUxheWVyID0gZ2xvYmFsVGhpcy53aW5kb3cuZGF0YUxheWVyIHx8IFtdOwogICAgaWYgKCFldmVudCB8fCAhZ2xvYmFsVGhpcy53aW5kb3cuZGF0YUxheWVyIHx8IHR5cGVvZiBnbG9iYWxUaGlzLndpbmRvdy5kYXRhTGF5ZXIucHVzaCAhPT0gImZ1bmN0aW9uIikgewogICAgICByZXR1cm47CiAgICB9CiAgICBpZiAoZXZlbnQubmFtZSA9PT0gImRlY28iKSB7CiAgICAgIGdsb2JhbFRoaXMud2luZG93LmRhdGFMYXllci5wdXNoKHsKICAgICAgICBldmVudDogZXZlbnQubmFtZSwKICAgICAgICBkZWNvOiBldmVudC5wYXJhbXMKICAgICAgfSk7CiAgICAgIHJldHVybjsKICAgIH0KICAgIGdsb2JhbFRoaXMud2luZG93LmRhdGFMYXllci5wdXNoKHsKICAgICAgZWNvbW1lcmNlOiBudWxsCiAgICB9KTsKICAgIGdsb2JhbFRoaXMud2luZG93LmRhdGFMYXllci5wdXNoKHsKICAgICAgZXZlbnQ6IGV2ZW50Lm5hbWUsCiAgICAgIGVjb21tZXJjZTogZXZlbnQucGFyYW1zCiAgICB9KTsKICB9KTsKfSkoKSkp"
      nonce=""
    ></script>
  </section>
  <section
    id="2778401160-4"
    data-manifest-key="algolia/sections/Analytics/Algolia.tsx"
  >
    <script
      defer=""
      src="data:text/javascript;base64,ZGVjb2RlVVJJQ29tcG9uZW50KGVzY2FwZSgoKGFwcElkLCBhcGlLZXksIHZlcnNpb24pPT57CiAgZnVuY3Rpb24gc2V0dXBTY3JpcHRUYWcoKSB7CiAgICBnbG9iYWxUaGlzLndpbmRvdy5BbGdvbGlhQW5hbHl0aWNzT2JqZWN0ID0gImFhIjsKICAgIGdsb2JhbFRoaXMud2luZG93LmFhID0gZ2xvYmFsVGhpcy53aW5kb3cuYWEgfHwgZnVuY3Rpb24oKSB7CiAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgbW9ua2V5IHBhdGNoIGJlZm9yZSBpbml0aWFsaXphdGlvbgogICAgICAoZ2xvYmFsVGhpcy53aW5kb3cuYWEucXVldWUgPSBnbG9iYWxUaGlzLndpbmRvdy5hYS5xdWV1ZSB8fCBbXSkucHVzaChhcmd1bWVudHMpOwogICAgfTsKICAgIGdsb2JhbFRoaXMud2luZG93LmFhLnZlcnNpb24gPSB2ZXJzaW9uOwogICAgY29uc3Qgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgic2NyaXB0Iik7CiAgICBzY3JpcHQuc2V0QXR0cmlidXRlKCJhc3luYyIsICIiKTsKICAgIHNjcmlwdC5zZXRBdHRyaWJ1dGUoInNyYyIsIGBodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL3NlYXJjaC1pbnNpZ2h0c0Ake3ZlcnNpb259L2Rpc3Qvc2VhcmNoLWluc2lnaHRzLm1pbi5qc2ApOwogICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpOwogIH0KICBmdW5jdGlvbiBjcmVhdGVVc2VyVG9rZW4oKSB7CiAgICBpZiAodHlwZW9mIGNyeXB0byAhPT0gInVuZGVmaW5lZCIgJiYgdHlwZW9mIGNyeXB0by5yYW5kb21VVUlEID09PSAiZnVuY3Rpb24iKSB7CiAgICAgIHJldHVybiBjcnlwdG8ucmFuZG9tVVVJRCgpOwogICAgfQogICAgcmV0dXJuIChNYXRoLnJhbmRvbSgpICogMWU5KS50b0ZpeGVkKCk7CiAgfQogIGZ1bmN0aW9uIHNldHVwU2Vzc2lvbigpIHsKICAgIGdsb2JhbFRoaXMud2luZG93LmFhKCJpbml0IiwgewogICAgICBhcHBJZCwKICAgICAgYXBpS2V5CiAgICB9KTsKICAgIGNvbnN0IHVzZXJUb2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCJBTEdPTElBX1VTRVJfVE9LRU4iKSB8fCBjcmVhdGVVc2VyVG9rZW4oKTsKICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCJBTEdPTElBX1VTRVJfVE9LRU4iLCB1c2VyVG9rZW4pOwogICAgZ2xvYmFsVGhpcy53aW5kb3cuYWEoInNldFVzZXJUb2tlbiIsIHVzZXJUb2tlbik7CiAgfQogIGZ1bmN0aW9uIHNldHVwRXZlbnRMaXN0ZW5lcnMoKSB7CiAgICBmdW5jdGlvbiBhdHRyaWJ1dGVzRnJvbVVSTChocmVmKSB7CiAgICAgIGNvbnN0IHVybCA9IG5ldyBVUkwoaHJlZik7CiAgICAgIGNvbnN0IHF1ZXJ5SUQgPSB1cmwuc2VhcmNoUGFyYW1zLmdldCgiYWxnb2xpYVF1ZXJ5SUQiKTsKICAgICAgY29uc3QgaW5kZXhOYW1lID0gdXJsLnNlYXJjaFBhcmFtcy5nZXQoImFsZ29saWFJbmRleCIpOwogICAgICAvLyBOb3QgY29tbWluZyBmcm9tIGFuIGFsZ29saWEgc2VhcmNoIHBhZ2UKICAgICAgaWYgKCFxdWVyeUlEIHx8ICFpbmRleE5hbWUpIHsKICAgICAgICByZXR1cm4gbnVsbDsKICAgICAgfQogICAgICByZXR1cm4gewogICAgICAgIHF1ZXJ5SUQsCiAgICAgICAgaW5kZXhOYW1lCiAgICAgIH07CiAgICB9CiAgICAvLyBkZW5vLWxpbnQtaWdub3JlIG5vLWV4cGxpY2l0LWFueQogICAgZnVuY3Rpb24gaXNTZWxlY3RJdGVtRXZlbnQoZXZlbnQpIHsKICAgICAgcmV0dXJuIGV2ZW50Lm5hbWUgPT09ICJzZWxlY3RfaXRlbSI7CiAgICB9CiAgICAvLyBkZW5vLWxpbnQtaWdub3JlIG5vLWV4cGxpY2l0LWFueQogICAgZnVuY3Rpb24gaXNBZGRUb0NhcnRFdmVudChldmVudCkgewogICAgICByZXR1cm4gZXZlbnQubmFtZSA9PT0gImFkZF90b19jYXJ0IjsKICAgIH0KICAgIGZ1bmN0aW9uIGlzVmlld0l0ZW0oLy8gZGVuby1saW50LWlnbm9yZSBuby1leHBsaWNpdC1hbnkKICAgIGV2ZW50KSB7CiAgICAgIHJldHVybiBldmVudC5uYW1lID09PSAidmlld19pdGVtIiB8fCBldmVudC5uYW1lID09PSAidmlld19pdGVtX2xpc3QiOwogICAgfQogICAgY29uc3QgaGFzSXRlbUlkID0gKGl0ZW0pPT4vLyBkZW5vLWxpbnQtaWdub3JlIG5vLWV4cGxpY2l0LWFueQogICAgICB0eXBlb2YgaXRlbS5pdGVtX2lkID09PSAic3RyaW5nIjsKICAgIGNvbnN0IFBST0RVQ1RTID0gInByb2R1Y3RzIjsKICAgIGNvbnN0IE1BWF9CQVRDSF9TSVpFID0gMjA7CiAgICBnbG9iYWxUaGlzLndpbmRvdy5ERUNPLmV2ZW50cy5zdWJzY3JpYmUoKGV2ZW50KT0+ewogICAgICBpZiAoIWV2ZW50KSByZXR1cm47CiAgICAgIGNvbnN0IGV2ZW50TmFtZSA9IGV2ZW50Lm5hbWU7CiAgICAgIGlmIChpc1NlbGVjdEl0ZW1FdmVudChldmVudCkpIHsKICAgICAgICBjb25zdCBbaXRlbV0gPSBldmVudC5wYXJhbXMuaXRlbXM7CiAgICAgICAgaWYgKCFpdGVtIHx8ICFoYXNJdGVtSWQoaXRlbSkgfHwgdHlwZW9mIGl0ZW0uaW5kZXggIT09ICJudW1iZXIiIHx8IHR5cGVvZiBpdGVtLml0ZW1fdXJsICE9PSAic3RyaW5nIikgewogICAgICAgICAgcmV0dXJuIGNvbnNvbGUud2FybigiRmFpbGVkIHNlbmRpbmcgZXZlbnQgdG8gQWxnb2xpYS4gTWlzc2luZyBpbmRleCwgaXRlbV9pZCBvciBpdGVtX3VybCIsIEpTT04uc3RyaW5naWZ5KGV2ZW50LCBudWxsLCAyKSk7CiAgICAgICAgfQogICAgICAgIGNvbnN0IGF0dHIgPSBhdHRyaWJ1dGVzRnJvbVVSTChpdGVtLml0ZW1fdXJsKTsKICAgICAgICBpZiAoYXR0cikgewogICAgICAgICAgZ2xvYmFsVGhpcy53aW5kb3cuYWEoImNsaWNrZWRPYmplY3RJRHNBZnRlclNlYXJjaCIsIHsKICAgICAgICAgICAgZXZlbnROYW1lLAogICAgICAgICAgICBpbmRleDogYXR0ci5pbmRleE5hbWUsCiAgICAgICAgICAgIHF1ZXJ5SUQ6IGF0dHIucXVlcnlJRCwKICAgICAgICAgICAgb2JqZWN0SURzOiBbCiAgICAgICAgICAgICAgaXRlbS5pdGVtX2lkCiAgICAgICAgICAgIF0sCiAgICAgICAgICAgIHBvc2l0aW9uczogWwogICAgICAgICAgICAgIGl0ZW0uaW5kZXggKyAxCiAgICAgICAgICAgIF0KICAgICAgICAgIH0pOwogICAgICAgIH0gZWxzZSB7CiAgICAgICAgICBnbG9iYWxUaGlzLndpbmRvdy5hYSgiY2xpY2tlZE9iamVjdElEcyIsIHsKICAgICAgICAgICAgZXZlbnROYW1lLAogICAgICAgICAgICBpbmRleDogUFJPRFVDVFMsCiAgICAgICAgICAgIG9iamVjdElEczogWwogICAgICAgICAgICAgIGl0ZW0uaXRlbV9pZAogICAgICAgICAgICBdCiAgICAgICAgICB9KTsKICAgICAgICB9CiAgICAgIH0KICAgICAgaWYgKGlzQWRkVG9DYXJ0RXZlbnQoZXZlbnQpKSB7CiAgICAgICAgY29uc3QgW2l0ZW1dID0gZXZlbnQucGFyYW1zLml0ZW1zOwogICAgICAgIGNvbnN0IGF0dHIgPSBhdHRyaWJ1dGVzRnJvbVVSTChnbG9iYWxUaGlzLndpbmRvdy5sb2NhdGlvbi5ocmVmKSB8fCBhdHRyaWJ1dGVzRnJvbVVSTChpdGVtLml0ZW1fdXJsIHx8ICIiKTsKICAgICAgICBjb25zdCBvYmplY3RJRHMgPSBldmVudC5wYXJhbXMuaXRlbXMuZmlsdGVyKGhhc0l0ZW1JZCkubWFwKChpKT0+aS5pdGVtX2lkKTsKICAgICAgICBpZiAoYXR0cikgewogICAgICAgICAgZ2xvYmFsVGhpcy53aW5kb3cuYWEoImNvbnZlcnRlZE9iamVjdElEc0FmdGVyU2VhcmNoIiwgewogICAgICAgICAgICBldmVudE5hbWUsCiAgICAgICAgICAgIG9iamVjdElEcywKICAgICAgICAgICAgaW5kZXg6IGF0dHIuaW5kZXhOYW1lLAogICAgICAgICAgICBxdWVyeUlEOiBhdHRyLnF1ZXJ5SUQKICAgICAgICAgIH0pOwogICAgICAgIH0gZWxzZSB7CiAgICAgICAgICBnbG9iYWxUaGlzLndpbmRvdy5hYSgiY29udmVydGVkT2JqZWN0SURzIiwgewogICAgICAgICAgICBldmVudE5hbWUsCiAgICAgICAgICAgIGluZGV4OiBQUk9EVUNUUywKICAgICAgICAgICAgb2JqZWN0SURzCiAgICAgICAgICB9KTsKICAgICAgICB9CiAgICAgIH0KICAgICAgaWYgKGlzVmlld0l0ZW0oZXZlbnQpKSB7CiAgICAgICAgY29uc3Qgb2JqZWN0SURzID0gZXZlbnQucGFyYW1zLml0ZW1zLmZpbHRlcihoYXNJdGVtSWQpLm1hcCgoaSk9PmkuaXRlbV9pZCk7CiAgICAgICAgZm9yKGxldCBpdCA9IDA7IGl0IDwgb2JqZWN0SURzLmxlbmd0aDsgaXQgKz0gTUFYX0JBVENIX1NJWkUpewogICAgICAgICAgZ2xvYmFsVGhpcy53aW5kb3cuYWEoInZpZXdlZE9iamVjdElEcyIsIHsKICAgICAgICAgICAgZXZlbnROYW1lLAogICAgICAgICAgICBpbmRleDogUFJPRFVDVFMsCiAgICAgICAgICAgIG9iamVjdElEczogb2JqZWN0SURzLnNsaWNlKGl0LCAoaXQgKyAxKSAqIE1BWF9CQVRDSF9TSVpFKQogICAgICAgICAgfSk7CiAgICAgICAgfQogICAgICB9CiAgICB9KTsKICB9CiAgc2V0dXBTY3JpcHRUYWcoKTsKICBzZXR1cFNlc3Npb24oKTsKICBzZXR1cEV2ZW50TGlzdGVuZXJzKCk7Cn0pKCIzTUlOWkhUMzZZIiwgImMxZGIwYzM4ODAyOGFmZDU3NDc1MGEwZjNhYmM5MTFkIiwgIjIuOS4wIikpKQ=="
      nonce=""
    ></script>
  </section>
  <section
    id="3776351889-4"
    data-manifest-key="analytics/sections/Analytics/DecoAnalytics.tsx"
  ></section>
  <section
    id="639109740-4"
    data-manifest-key="htmx/sections/htmx.tsx"
  ></section>
  <section
    id="2984042699-4"
    data-manifest-key="site/sections/Theme/Theme.tsx"
  ></section>
  <section
    id="3603877124-0"
    data-manifest-key="site/sections/Header/Header.tsx"
  >
    <header style="height: 110px">
      <div class="drawer">
        <input
          id="P0-0377061"
          type="checkbox"
          aria-label="closed drawer"
          class="drawer-toggle"
        />
        <div class="drawer-content">
          <div class="bg-base-100 fixed w-full z-50">
            <div id="P0-6575876">
              <ul
                data-slider="true"
                class="carousel carousel-center w-screen bg-secondary gap-6"
              >
                <li data-slider-item="0" class="carousel-item">
                  <span
                    class="text-sm text-secondary-content flex justify-center items-center w-screen h-[38px]"
                    >Use this template to create your store at deco.cx</span
                  >
                </li>
              </ul>
              <script
                src="data:text/javascript;base64,ZGVjb2RlVVJJQ29tcG9uZW50KGVzY2FwZSgoKHsgcm9vdElkLCBzY3JvbGwsIGludGVydmFsLCBpbmZpbml0ZSB9KT0+ewogIGNvbnN0IEFUVFJJQlVURVMgPSB7CiAgICAiZGF0YS1zbGlkZXIiOiAiZGF0YS1zbGlkZXIiLAogICAgImRhdGEtc2xpZGVyLWl0ZW0iOiAiZGF0YS1zbGlkZXItaXRlbSIsCiAgICAnZGF0YS1zbGlkZT0icHJldiInOiAnZGF0YS1zbGlkZT0icHJldiInLAogICAgJ2RhdGEtc2xpZGU9Im5leHQiJzogJ2RhdGEtc2xpZGU9Im5leHQiJywKICAgICJkYXRhLWRvdCI6ICJkYXRhLWRvdCIKICB9OwogIC8vIFBlcmNlbnRhZ2Ugb2YgdGhlIGl0ZW0gdGhhdCBoYXMgdG8gYmUgaW5zaWRlIHRoZSBjb250YWluZXIKICAvLyBmb3IgaXQgaXQgYmUgY29uc2lkZXJlZCBhcyBpbnNpZGUgdGhlIGNvbnRhaW5lcgogIGNvbnN0IFRIUkVTSE9MRCA9IDAuNjsKICBjb25zdCBpbnRlcnNlY3Rpb25YID0gKGVsZW1lbnQsIGNvbnRhaW5lcik9PnsKICAgIGNvbnN0IGRlbHRhID0gY29udGFpbmVyLndpZHRoIC8gMV8wMDA7CiAgICBpZiAoZWxlbWVudC5yaWdodCA8IGNvbnRhaW5lci5sZWZ0IC0gZGVsdGEpIHsKICAgICAgcmV0dXJuIDAuMDsKICAgIH0KICAgIGlmIChlbGVtZW50LmxlZnQgPiBjb250YWluZXIucmlnaHQgKyBkZWx0YSkgewogICAgICByZXR1cm4gMC4wOwogICAgfQogICAgaWYgKGVsZW1lbnQubGVmdCA8IGNvbnRhaW5lci5sZWZ0IC0gZGVsdGEpIHsKICAgICAgcmV0dXJuIGVsZW1lbnQucmlnaHQgLSBjb250YWluZXIubGVmdCArIGRlbHRhOwogICAgfQogICAgaWYgKGVsZW1lbnQucmlnaHQgPiBjb250YWluZXIucmlnaHQgKyBkZWx0YSkgewogICAgICByZXR1cm4gY29udGFpbmVyLnJpZ2h0IC0gZWxlbWVudC5sZWZ0ICsgZGVsdGE7CiAgICB9CiAgICByZXR1cm4gZWxlbWVudC53aWR0aDsKICB9OwogIC8vIGFzIGFueSBhcmUgb2sgaW4gdHlwZWd1YXJkIGZ1bmN0aW9ucwogIGNvbnN0IGlzSFRNTEVsZW1lbnQgPSAoeCk9Pi8vIGRlbm8tbGludC1pZ25vcmUgbm8tZXhwbGljaXQtYW55CiAgICB0eXBlb2YgeC5vZmZzZXRMZWZ0ID09PSAibnVtYmVyIjsKICBjb25zdCByb290ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocm9vdElkKTsKICBjb25zdCBzbGlkZXIgPSByb290Py5xdWVyeVNlbGVjdG9yKGBbJHtBVFRSSUJVVEVTWyJkYXRhLXNsaWRlciJdfV1gKTsKICBjb25zdCBpdGVtcyA9IHJvb3Q/LnF1ZXJ5U2VsZWN0b3JBbGwoYFske0FUVFJJQlVURVNbImRhdGEtc2xpZGVyLWl0ZW0iXX1dYCk7CiAgY29uc3QgcHJldiA9IHJvb3Q/LnF1ZXJ5U2VsZWN0b3IoYFske0FUVFJJQlVURVNbJ2RhdGEtc2xpZGU9InByZXYiJ119XWApOwogIGNvbnN0IG5leHQgPSByb290Py5xdWVyeVNlbGVjdG9yKGBbJHtBVFRSSUJVVEVTWydkYXRhLXNsaWRlPSJuZXh0IiddfV1gKTsKICBjb25zdCBkb3RzID0gcm9vdD8ucXVlcnlTZWxlY3RvckFsbChgWyR7QVRUUklCVVRFU1siZGF0YS1kb3QiXX1dYCk7CiAgaWYgKCFyb290IHx8ICFzbGlkZXIgfHwgIWl0ZW1zIHx8IGl0ZW1zLmxlbmd0aCA9PT0gMCkgewogICAgY29uc29sZS53YXJuKCJNaXNzaW5nIG5lY2Vzc2FyeSBzbGlkZXIgYXR0cmlidXRlcy4gSXQgd2lsbCBub3Qgd29yayBhcyBpbnRlbmRlZC4gTmVjZXNzYXJ5IGVsZW1lbnRzOiIsIHsKICAgICAgcm9vdCwKICAgICAgc2xpZGVyLAogICAgICBpdGVtcywKICAgICAgcm9vdElkCiAgICB9KTsKICAgIHJldHVybjsKICB9CiAgY29uc3QgZ2V0RWxlbWVudHNJbnNpZGVDb250YWluZXIgPSAoKT0+ewogICAgY29uc3QgaW5kaWNlcyA9IFtdOwogICAgY29uc3Qgc2xpZGVyUmVjdCA9IHNsaWRlci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTsKICAgIGZvcihsZXQgaW5kZXggPSAwOyBpbmRleCA8IGl0ZW1zLmxlbmd0aDsgaW5kZXgrKyl7CiAgICAgIGNvbnN0IGl0ZW0gPSBpdGVtcy5pdGVtKGluZGV4KTsKICAgICAgY29uc3QgcmVjdCA9IGl0ZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7CiAgICAgIGNvbnN0IHJhdGlvID0gaW50ZXJzZWN0aW9uWChyZWN0LCBzbGlkZXJSZWN0KSAvIHJlY3Qud2lkdGg7CiAgICAgIGlmIChyYXRpbyA+IFRIUkVTSE9MRCkgewogICAgICAgIGluZGljZXMucHVzaChpbmRleCk7CiAgICAgIH0KICAgIH0KICAgIHJldHVybiBpbmRpY2VzOwogIH07CiAgY29uc3QgZ29Ub0l0ZW0gPSAoaW5kZXgpPT57CiAgICBjb25zdCBpdGVtID0gaXRlbXMuaXRlbShpbmRleCk7CiAgICBpZiAoIWlzSFRNTEVsZW1lbnQoaXRlbSkpIHsKICAgICAgY29uc29sZS53YXJuKGBFbGVtZW50IGF0IGluZGV4ICR7aW5kZXh9IGlzIG5vdCBhbiBodG1sIGVsZW1lbnQuIFNraXBwaW5nIGNhcm91c2VsYCk7CiAgICAgIHJldHVybjsKICAgIH0KICAgIHNsaWRlci5zY3JvbGxUbyh7CiAgICAgIHRvcDogMCwKICAgICAgYmVoYXZpb3I6IHNjcm9sbCwKICAgICAgbGVmdDogaXRlbS5vZmZzZXRMZWZ0IC0gcm9vdC5vZmZzZXRMZWZ0CiAgICB9KTsKICB9OwogIGNvbnN0IG9uQ2xpY2tQcmV2ID0gKCk9PnsKICAgIGNvbnN0IGluZGljZXMgPSBnZXRFbGVtZW50c0luc2lkZUNvbnRhaW5lcigpOwogICAgLy8gV293ISBpdGVtcyBwZXIgcGFnZSBpcyBob3cgbWFueSBlbGVtZW50cyBhcmUgYmVpbmcgZGlzcGxheWVkIGluc2lkZSB0aGUgY29udGFpbmVyISEKICAgIGNvbnN0IGl0ZW1zUGVyUGFnZSA9IGluZGljZXMubGVuZ3RoOwogICAgY29uc3QgaXNTaG93aW5nRmlyc3QgPSBpbmRpY2VzWzBdID09PSAwOwogICAgY29uc3QgcGFnZUluZGV4ID0gTWF0aC5mbG9vcihpbmRpY2VzW2luZGljZXMubGVuZ3RoIC0gMV0gLyBpdGVtc1BlclBhZ2UpOwogICAgZ29Ub0l0ZW0oaXNTaG93aW5nRmlyc3QgPyBpdGVtcy5sZW5ndGggLSAxIDogKHBhZ2VJbmRleCAtIDEpICogaXRlbXNQZXJQYWdlKTsKICB9OwogIGNvbnN0IG9uQ2xpY2tOZXh0ID0gKCk9PnsKICAgIGNvbnN0IGluZGljZXMgPSBnZXRFbGVtZW50c0luc2lkZUNvbnRhaW5lcigpOwogICAgLy8gV293ISBpdGVtcyBwZXIgcGFnZSBpcyBob3cgbWFueSBlbGVtZW50cyBhcmUgYmVpbmcgZGlzcGxheWVkIGluc2lkZSB0aGUgY29udGFpbmVyISEKICAgIGNvbnN0IGl0ZW1zUGVyUGFnZSA9IGluZGljZXMubGVuZ3RoOwogICAgY29uc3QgaXNTaG93aW5nTGFzdCA9IGluZGljZXNbaW5kaWNlcy5sZW5ndGggLSAxXSA9PT0gaXRlbXMubGVuZ3RoIC0gMTsKICAgIGNvbnN0IHBhZ2VJbmRleCA9IE1hdGguZmxvb3IoaW5kaWNlc1swXSAvIGl0ZW1zUGVyUGFnZSk7CiAgICBnb1RvSXRlbShpc1Nob3dpbmdMYXN0ID8gMCA6IChwYWdlSW5kZXggKyAxKSAqIGl0ZW1zUGVyUGFnZSk7CiAgfTsKICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZWxlbWVudHMpPT5lbGVtZW50cy5mb3JFYWNoKChpdGVtKT0+ewogICAgICBjb25zdCBpbmRleCA9IE51bWJlcihpdGVtLnRhcmdldC5nZXRBdHRyaWJ1dGUoImRhdGEtc2xpZGVyLWl0ZW0iKSkgfHwgMDsKICAgICAgY29uc3QgZG90ID0gZG90cz8uaXRlbShpbmRleCk7CiAgICAgIGlmIChpdGVtLmlzSW50ZXJzZWN0aW5nKSB7CiAgICAgICAgZG90Py5zZXRBdHRyaWJ1dGUoImRpc2FibGVkIiwgIiIpOwogICAgICB9IGVsc2UgewogICAgICAgIGRvdD8ucmVtb3ZlQXR0cmlidXRlKCJkaXNhYmxlZCIpOwogICAgICB9CiAgICAgIGlmICghaW5maW5pdGUpIHsKICAgICAgICBpZiAoaW5kZXggPT09IDApIHsKICAgICAgICAgIGlmIChpdGVtLmlzSW50ZXJzZWN0aW5nKSB7CiAgICAgICAgICAgIHByZXY/LnNldEF0dHJpYnV0ZSgiZGlzYWJsZWQiLCAiIik7CiAgICAgICAgICB9IGVsc2UgewogICAgICAgICAgICBwcmV2Py5yZW1vdmVBdHRyaWJ1dGUoImRpc2FibGVkIik7CiAgICAgICAgICB9CiAgICAgICAgfQogICAgICAgIGlmIChpbmRleCA9PT0gaXRlbXMubGVuZ3RoIC0gMSkgewogICAgICAgICAgaWYgKGl0ZW0uaXNJbnRlcnNlY3RpbmcpIHsKICAgICAgICAgICAgbmV4dD8uc2V0QXR0cmlidXRlKCJkaXNhYmxlZCIsICIiKTsKICAgICAgICAgIH0gZWxzZSB7CiAgICAgICAgICAgIG5leHQ/LnJlbW92ZUF0dHJpYnV0ZSgiZGlzYWJsZWQiKTsKICAgICAgICAgIH0KICAgICAgICB9CiAgICAgIH0KICAgIH0pLCB7CiAgICB0aHJlc2hvbGQ6IFRIUkVTSE9MRCwKICAgIHJvb3Q6IHNsaWRlcgogIH0pOwogIGl0ZW1zLmZvckVhY2goKGl0ZW0pPT5vYnNlcnZlci5vYnNlcnZlKGl0ZW0pKTsKICBmb3IobGV0IGl0ID0gMDsgaXQgPCAoZG90cz8ubGVuZ3RoID8/IDApOyBpdCsrKXsKICAgIGRvdHM/Lml0ZW0oaXQpLmFkZEV2ZW50TGlzdGVuZXIoImNsaWNrIiwgKCk9PmdvVG9JdGVtKGl0KSk7CiAgfQogIHByZXY/LmFkZEV2ZW50TGlzdGVuZXIoImNsaWNrIiwgb25DbGlja1ByZXYpOwogIG5leHQ/LmFkZEV2ZW50TGlzdGVuZXIoImNsaWNrIiwgb25DbGlja05leHQpOwogIGNvbnN0IHRpbWVvdXQgPSBpbnRlcnZhbCAmJiBzZXRJbnRlcnZhbChvbkNsaWNrTmV4dCwgaW50ZXJ2YWwpOwogIC8vIFVucmVnaXN0ZXIgY2FsbGJhY2tzCiAgcmV0dXJuICgpPT57CiAgICBmb3IobGV0IGl0ID0gMDsgaXQgPCAoZG90cz8ubGVuZ3RoID8/IDApOyBpdCsrKXsKICAgICAgZG90cz8uaXRlbShpdCkucmVtb3ZlRXZlbnRMaXN0ZW5lcigiY2xpY2siLCAoKT0+Z29Ub0l0ZW0oaXQpKTsKICAgIH0KICAgIHByZXY/LnJlbW92ZUV2ZW50TGlzdGVuZXIoImNsaWNrIiwgb25DbGlja1ByZXYpOwogICAgbmV4dD8ucmVtb3ZlRXZlbnRMaXN0ZW5lcigiY2xpY2siLCBvbkNsaWNrTmV4dCk7CiAgICBvYnNlcnZlci5kaXNjb25uZWN0KCk7CiAgICBjbGVhckludGVydmFsKHRpbWVvdXQpOwogIH07Cn0pKHsicm9vdElkIjoiUDAtNjU3NTg3NiIsInNjcm9sbCI6InNtb290aCIsImludGVydmFsIjo1MDAwLCJpbmZpbml0ZSI6ZmFsc2V9KSkp"
                defer=""
                nonce=""
              ></script>
            </div>
            <div
              class="hidden sm:grid sm:grid-cols-3 items-center border-b border-base-200 w-full px-6"
            >
              <ul class="flex gap-6 col-span-1 justify-start">
                <li class="group flex items-center">
                  <a href="/feminino" class="py-6"
                    ><span class="group-hover:underline text-xs font-thin"
                      >Feminino</span
                    ></a
                  >
                  <div
                    style="top: 0px; left: 0px; margin-top: 110px"
                    class="fixed hidden hover:flex group-hover:flex bg-base-100 z-50 items-start justify-center gap-6 border-t border-b-2 border-base-200 w-screen"
                  >
                    <img
                      src="https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/239/7733d479-0fd1-4f33-bed9-6f9e170655d6"
                      width="300"
                      height="332"
                      loading="lazy"
                      data-fresh-disable-lock="true"
                      srcset="
                        /live/invoke/website/loaders/image.ts?src=https%3A%2F%2Fozksgdmyrqcxcwhnbepg.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fassets%2F239%2F7733d479-0fd1-4f33-bed9-6f9e170655d6&amp;fit=cover&amp;width=300&amp;height=332 300w,
                        /live/invoke/website/loaders/image.ts?src=https%3A%2F%2Fozksgdmyrqcxcwhnbepg.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fassets%2F239%2F7733d479-0fd1-4f33-bed9-6f9e170655d6&amp;fit=cover&amp;width=600&amp;height=664 600w
                      "
                      class="p-6"
                    />
                    <ul class="flex items-start justify-center gap-6">
                      <li class="p-6">
                        <a href="/feminino/saias" class="hover:underline"
                          ><span>Novidades</span></a
                        >
                        <ul class="flex flex-col gap-1 mt-4">
                          <li>
                            <a
                              href="/feminino/vestidos"
                              class="hover:underline"
                              ><span class="text-xs">Mais vendidos</span></a
                            >
                          </li>
                          <li>
                            <a
                              href="/feminino/vestidos"
                              class="hover:underline"
                              ><span class="text-xs">Parcerias</span></a
                            >
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </li>
                <li class="group flex items-center">
                  <a href="/masculino" class="py-6"
                    ><span class="group-hover:underline text-xs font-thin"
                      >Masculino</span
                    ></a
                  >
                  <div
                    style="top: 0px; left: 0px; margin-top: 110px"
                    class="fixed hidden hover:flex group-hover:flex bg-base-100 z-50 items-start justify-center gap-6 border-t border-b-2 border-base-200 w-screen"
                  >
                    <img
                      src="https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/239/575c3b0f-1a2e-4ecb-aaad-532671dc553d"
                      width="300"
                      height="332"
                      loading="lazy"
                      data-fresh-disable-lock="true"
                      srcset="
                        /live/invoke/website/loaders/image.ts?src=https%3A%2F%2Fozksgdmyrqcxcwhnbepg.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fassets%2F239%2F575c3b0f-1a2e-4ecb-aaad-532671dc553d&amp;fit=cover&amp;width=300&amp;height=332 300w,
                        /live/invoke/website/loaders/image.ts?src=https%3A%2F%2Fozksgdmyrqcxcwhnbepg.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fassets%2F239%2F575c3b0f-1a2e-4ecb-aaad-532671dc553d&amp;fit=cover&amp;width=600&amp;height=664 600w
                      "
                      class="p-6"
                    />
                    <ul class="flex items-start justify-center gap-6">
                      <li class="p-6">
                        <a href="/masculino" class="hover:underline"
                          ><span>Novidades</span></a
                        >
                        <ul class="flex flex-col gap-1 mt-4">
                          <li>
                            <a href="/masculino" class="hover:underline"
                              ><span class="text-xs">Mais vendidos</span></a
                            >
                          </li>
                          <li>
                            <a href="/masculino" class="hover:underline"
                              ><span class="text-xs">Parcerias</span></a
                            >
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </li>
                <li class="group flex items-center">
                  <a href="/sale" class="py-6"
                    ><span class="group-hover:underline text-xs font-thin"
                      >Sale</span
                    ></a
                  >
                  <div
                    style="top: 0px; left: 0px; margin-top: 110px"
                    class="fixed hidden hover:flex group-hover:flex bg-base-100 z-50 items-start justify-center gap-6 border-t border-b-2 border-base-200 w-screen"
                  >
                    <img
                      src="https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/239/5e9310c0-c725-4643-ade3-f92a505bd1d6"
                      width="300"
                      height="332"
                      loading="lazy"
                      data-fresh-disable-lock="true"
                      srcset="
                        /live/invoke/website/loaders/image.ts?src=https%3A%2F%2Fozksgdmyrqcxcwhnbepg.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fassets%2F239%2F5e9310c0-c725-4643-ade3-f92a505bd1d6&amp;fit=cover&amp;width=300&amp;height=332 300w,
                        /live/invoke/website/loaders/image.ts?src=https%3A%2F%2Fozksgdmyrqcxcwhnbepg.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fassets%2F239%2F5e9310c0-c725-4643-ade3-f92a505bd1d6&amp;fit=cover&amp;width=600&amp;height=664 600w
                      "
                      class="p-6"
                    />
                    <ul class="flex items-start justify-center gap-6">
                      <li class="p-6">
                        <a href="/feminino" class="hover:underline"
                          ><span>Feminino</span></a
                        >
                        <ul class="flex flex-col gap-1 mt-4">
                          <li>
                            <a href="/feminino" class="hover:underline"
                              ><span class="text-xs">Camisetas</span></a
                            >
                          </li>
                          <li>
                            <a href="/feminino" class="hover:underline"
                              ><span class="text-xs">Camisas</span></a
                            >
                          </li>
                        </ul>
                      </li>
                      <li class="p-6">
                        <a href="/masculino" class="hover:underline"
                          ><span>Masculino</span></a
                        >
                        <ul class="flex flex-col gap-1 mt-4">
                          <li>
                            <a href="/masculino" class="hover:underline"
                              ><span class="text-xs">Camisetas</span></a
                            >
                          </li>
                          <li>
                            <a href="/masculino" class="hover:underline"
                              ><span class="text-xs">Regatas</span></a
                            >
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </li>
                <li class="group flex items-center">
                  <a href="/linktree" class="py-6"
                    ><span class="group-hover:underline text-xs font-thin"
                      >Link Tree</span
                    ></a
                  >
                </li>
              </ul>
              <div class="flex justify-center">
                <a
                  href="/"
                  aria-label="Store logo"
                  class="block"
                  data-current="true"
                  aria-current="page"
                  ><img
                    src="https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/2291/986b61d4-3847-4867-93c8-b550cb459cc7"
                    alt="Glamour logo by deco"
                    width="100"
                    height="16"
                    data-fresh-disable-lock="true"
                    srcset="
                      /live/invoke/website/loaders/image.ts?src=https%3A%2F%2Fozksgdmyrqcxcwhnbepg.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fassets%2F2291%2F986b61d4-3847-4867-93c8-b550cb459cc7&amp;fit=cover&amp;width=100&amp;height=16 100w,
                      /live/invoke/website/loaders/image.ts?src=https%3A%2F%2Fozksgdmyrqcxcwhnbepg.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fassets%2F2291%2F986b61d4-3847-4867-93c8-b550cb459cc7&amp;fit=cover&amp;width=200&amp;height=32 200w
                    "
                    loading="lazy"
                /></a>
              </div>
              <div
                class="flex-none flex items-center justify-end gap-6 col-span-1"
              >
                <div class="flex items-center text-xs font-thin gap-1">
                  <button
                    aria-label="search icon button"
                    type="button"
                    class="btn no-animation btn-circle btn-sm btn-ghost hidden sm:flex"
                  >
                    <svg width="20" height="20" stroke-width="0.1">
                      <use
                        href="/sprites.svg?__frsh_c=23d7a5fd9627e01d1ed21d67f4a41eeb2440812a#MagnifyingGlass"
                      ></use>
                    </svg></button
                  ><button
                    aria-label="search icon button"
                    type="button"
                    class="btn no-animation btn-circle btn-sm btn-ghost sm:hidden"
                  >
                    <svg width="20" height="20" stroke-width="0.1">
                      <use
                        href="/sprites.svg?__frsh_c=23d7a5fd9627e01d1ed21d67f4a41eeb2440812a#MagnifyingGlass"
                      ></use>
                    </svg></button
                  >SEARCH
                </div>
                <input id="P0-1180524" type="checkbox" class="modal-toggle" />
                <div class="modal">
                  <div
                    class="absolute top-0 bg-base-100 container"
                    style="margin-top: 110px"
                  >
                    <div
                      class="w-full grid gap-8 px-4 py-6 overflow-y-hidden"
                      style="grid-template-rows: min-content auto"
                    >
                      <form id="P0-4313070" action="/s" class="join">
                        <button
                          aria-label="Search"
                          for="P0-4313070"
                          tabindex="-1"
                          type="submit"
                          class="btn no-animation join-item btn-square"
                        >
                          <svg width="24" height="24" stroke-width="0.01">
                            <use
                              href="/sprites.svg?__frsh_c=23d7a5fd9627e01d1ed21d67f4a41eeb2440812a#MagnifyingGlass"
                            ></use>
                          </svg></button
                        ><input
                          id="search-input"
                          name="q"
                          placeholder="What are you looking for?"
                          role="combobox"
                          aria-controls="search-suggestion"
                          aria-haspopup="listbox"
                          aria-expanded="false"
                          autocomplete="off"
                          class="input input-bordered join-item flex-grow"
                        /><button
                          aria-label="search closed"
                          type="button"
                          class="btn no-animation join-item btn-ghost btn-square hidden sm:inline-flex"
                        >
                          <svg width="24" height="24" stroke-width="2">
                            <use
                              href="/sprites.svg?__frsh_c=23d7a5fd9627e01d1ed21d67f4a41eeb2440812a#XMark"
                            ></use>
                          </svg>
                        </button>
                      </form>
                      <div class="overflow-y-scroll hidden">
                        <div
                          class="gap-4 grid grid-cols-1 sm:grid-rows-1 sm:grid-cols-[150px_1fr]"
                        >
                          <div class="flex flex-col gap-6">
                            <span
                              role="heading"
                              aria-level="3"
                              class="font-medium text-xl"
                              >Sugestões</span
                            >
                            <ul
                              id="search-suggestion"
                              class="flex flex-col gap-6"
                            ></ul>
                          </div>
                          <div
                            class="flex flex-col pt-6 md:pt-0 gap-6 overflow-x-hidden"
                          >
                            <span
                              role="heading"
                              aria-level="3"
                              class="font-medium text-xl"
                              >Produtos sugeridos</span
                            >
                            <ul data-slider="true" class="carousel"></ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <label for="P0-1180524" class="modal-backdrop">Close</label>
                </div>
                <a
                  href="/account"
                  aria-label="Account"
                  class="flex items-center text-xs font-thin"
                  ><div class="flex btn btn-circle btn-sm btn-ghost gap-1">
                    <svg width="20" height="20" stroke-width="0.4">
                      <use
                        href="/sprites.svg?__frsh_c=23d7a5fd9627e01d1ed21d67f4a41eeb2440812a#User"
                      ></use>
                    </svg>
                  </div>
                  ACCOUNT</a
                ><a
                  href="/wishlist"
                  aria-label="Wishlist"
                  class="flex items-center text-xs font-thin"
                  ><button
                    aria-label="Wishlist"
                    class="flex btn btn-circle btn-sm btn-ghost gap-1"
                  >
                    <svg width="24" height="24" stroke-width="0.4">
                      <use
                        href="/sprites.svg?__frsh_c=23d7a5fd9627e01d1ed21d67f4a41eeb2440812a#Heart"
                      ></use>
                    </svg></button
                  >WISHLIST</a
                >
                <div class="flex items-center text-xs font-thin">
                  <div class="indicator">
                    <span
                      class="indicator-item badge badge-secondary badge-sm hidden"
                      >0</span
                    ><button
                      aria-label="open cart"
                      data-deco="false"
                      type="button"
                      class="btn no-animation btn-circle btn-sm btn-ghost"
                    >
                      <svg width="24" height="24" stroke-width="2">
                        <use
                          href="/sprites.svg?__frsh_c=23d7a5fd9627e01d1ed21d67f4a41eeb2440812a#ShoppingCart"
                        ></use>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <aside class="drawer-side h-full z-50 overflow-hidden">
          <label for="P0-0377061" class="drawer-overlay"></label>
          <div
            class="bg-base-100 grid grid-rows-[auto_1fr] h-full divide-y max-w-[100vw]"
          >
            <div class="flex justify-between items-center">
              <h1 class="px-4 py-3">
                <span class="font-medium text-2xl">Buscar</span>
              </h1>
              <button
                aria-label="X"
                type="button"
                class="btn no-animation btn btn-ghost"
              >
                <svg width="24" height="24" stroke-width="2">
                  <use
                    href="/sprites.svg?__frsh_c=23d7a5fd9627e01d1ed21d67f4a41eeb2440812a#XMark"
                  ></use>
                </svg>
              </button>
            </div>
          </div>
        </aside>
      </div>
      <div class="drawer drawer-end">
        <input
          id="P0-2288527"
          type="checkbox"
          aria-label="closed drawer"
          class="drawer-toggle"
        />
        <div class="drawer-content">
          <div class="bg-base-100 fixed w-full z-50">
            <div id="P0-6575876">
              <ul
                data-slider="true"
                class="carousel carousel-center w-screen bg-secondary gap-6"
              >
                <li data-slider-item="0" class="carousel-item">
                  <span
                    class="text-sm text-secondary-content flex justify-center items-center w-screen h-[38px]"
                    >Use this template to create your store at deco.cx</span
                  >
                </li>
              </ul>
              <script
                src="data:text/javascript;base64,ZGVjb2RlVVJJQ29tcG9uZW50KGVzY2FwZSgoKHsgcm9vdElkLCBzY3JvbGwsIGludGVydmFsLCBpbmZpbml0ZSB9KT0+ewogIGNvbnN0IEFUVFJJQlVURVMgPSB7CiAgICAiZGF0YS1zbGlkZXIiOiAiZGF0YS1zbGlkZXIiLAogICAgImRhdGEtc2xpZGVyLWl0ZW0iOiAiZGF0YS1zbGlkZXItaXRlbSIsCiAgICAnZGF0YS1zbGlkZT0icHJldiInOiAnZGF0YS1zbGlkZT0icHJldiInLAogICAgJ2RhdGEtc2xpZGU9Im5leHQiJzogJ2RhdGEtc2xpZGU9Im5leHQiJywKICAgICJkYXRhLWRvdCI6ICJkYXRhLWRvdCIKICB9OwogIC8vIFBlcmNlbnRhZ2Ugb2YgdGhlIGl0ZW0gdGhhdCBoYXMgdG8gYmUgaW5zaWRlIHRoZSBjb250YWluZXIKICAvLyBmb3IgaXQgaXQgYmUgY29uc2lkZXJlZCBhcyBpbnNpZGUgdGhlIGNvbnRhaW5lcgogIGNvbnN0IFRIUkVTSE9MRCA9IDAuNjsKICBjb25zdCBpbnRlcnNlY3Rpb25YID0gKGVsZW1lbnQsIGNvbnRhaW5lcik9PnsKICAgIGNvbnN0IGRlbHRhID0gY29udGFpbmVyLndpZHRoIC8gMV8wMDA7CiAgICBpZiAoZWxlbWVudC5yaWdodCA8IGNvbnRhaW5lci5sZWZ0IC0gZGVsdGEpIHsKICAgICAgcmV0dXJuIDAuMDsKICAgIH0KICAgIGlmIChlbGVtZW50LmxlZnQgPiBjb250YWluZXIucmlnaHQgKyBkZWx0YSkgewogICAgICByZXR1cm4gMC4wOwogICAgfQogICAgaWYgKGVsZW1lbnQubGVmdCA8IGNvbnRhaW5lci5sZWZ0IC0gZGVsdGEpIHsKICAgICAgcmV0dXJuIGVsZW1lbnQucmlnaHQgLSBjb250YWluZXIubGVmdCArIGRlbHRhOwogICAgfQogICAgaWYgKGVsZW1lbnQucmlnaHQgPiBjb250YWluZXIucmlnaHQgKyBkZWx0YSkgewogICAgICByZXR1cm4gY29udGFpbmVyLnJpZ2h0IC0gZWxlbWVudC5sZWZ0ICsgZGVsdGE7CiAgICB9CiAgICByZXR1cm4gZWxlbWVudC53aWR0aDsKICB9OwogIC8vIGFzIGFueSBhcmUgb2sgaW4gdHlwZWd1YXJkIGZ1bmN0aW9ucwogIGNvbnN0IGlzSFRNTEVsZW1lbnQgPSAoeCk9Pi8vIGRlbm8tbGludC1pZ25vcmUgbm8tZXhwbGljaXQtYW55CiAgICB0eXBlb2YgeC5vZmZzZXRMZWZ0ID09PSAibnVtYmVyIjsKICBjb25zdCByb290ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocm9vdElkKTsKICBjb25zdCBzbGlkZXIgPSByb290Py5xdWVyeVNlbGVjdG9yKGBbJHtBVFRSSUJVVEVTWyJkYXRhLXNsaWRlciJdfV1gKTsKICBjb25zdCBpdGVtcyA9IHJvb3Q/LnF1ZXJ5U2VsZWN0b3JBbGwoYFske0FUVFJJQlVURVNbImRhdGEtc2xpZGVyLWl0ZW0iXX1dYCk7CiAgY29uc3QgcHJldiA9IHJvb3Q/LnF1ZXJ5U2VsZWN0b3IoYFske0FUVFJJQlVURVNbJ2RhdGEtc2xpZGU9InByZXYiJ119XWApOwogIGNvbnN0IG5leHQgPSByb290Py5xdWVyeVNlbGVjdG9yKGBbJHtBVFRSSUJVVEVTWydkYXRhLXNsaWRlPSJuZXh0IiddfV1gKTsKICBjb25zdCBkb3RzID0gcm9vdD8ucXVlcnlTZWxlY3RvckFsbChgWyR7QVRUUklCVVRFU1siZGF0YS1kb3QiXX1dYCk7CiAgaWYgKCFyb290IHx8ICFzbGlkZXIgfHwgIWl0ZW1zIHx8IGl0ZW1zLmxlbmd0aCA9PT0gMCkgewogICAgY29uc29sZS53YXJuKCJNaXNzaW5nIG5lY2Vzc2FyeSBzbGlkZXIgYXR0cmlidXRlcy4gSXQgd2lsbCBub3Qgd29yayBhcyBpbnRlbmRlZC4gTmVjZXNzYXJ5IGVsZW1lbnRzOiIsIHsKICAgICAgcm9vdCwKICAgICAgc2xpZGVyLAogICAgICBpdGVtcywKICAgICAgcm9vdElkCiAgICB9KTsKICAgIHJldHVybjsKICB9CiAgY29uc3QgZ2V0RWxlbWVudHNJbnNpZGVDb250YWluZXIgPSAoKT0+ewogICAgY29uc3QgaW5kaWNlcyA9IFtdOwogICAgY29uc3Qgc2xpZGVyUmVjdCA9IHNsaWRlci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTsKICAgIGZvcihsZXQgaW5kZXggPSAwOyBpbmRleCA8IGl0ZW1zLmxlbmd0aDsgaW5kZXgrKyl7CiAgICAgIGNvbnN0IGl0ZW0gPSBpdGVtcy5pdGVtKGluZGV4KTsKICAgICAgY29uc3QgcmVjdCA9IGl0ZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7CiAgICAgIGNvbnN0IHJhdGlvID0gaW50ZXJzZWN0aW9uWChyZWN0LCBzbGlkZXJSZWN0KSAvIHJlY3Qud2lkdGg7CiAgICAgIGlmIChyYXRpbyA+IFRIUkVTSE9MRCkgewogICAgICAgIGluZGljZXMucHVzaChpbmRleCk7CiAgICAgIH0KICAgIH0KICAgIHJldHVybiBpbmRpY2VzOwogIH07CiAgY29uc3QgZ29Ub0l0ZW0gPSAoaW5kZXgpPT57CiAgICBjb25zdCBpdGVtID0gaXRlbXMuaXRlbShpbmRleCk7CiAgICBpZiAoIWlzSFRNTEVsZW1lbnQoaXRlbSkpIHsKICAgICAgY29uc29sZS53YXJuKGBFbGVtZW50IGF0IGluZGV4ICR7aW5kZXh9IGlzIG5vdCBhbiBodG1sIGVsZW1lbnQuIFNraXBwaW5nIGNhcm91c2VsYCk7CiAgICAgIHJldHVybjsKICAgIH0KICAgIHNsaWRlci5zY3JvbGxUbyh7CiAgICAgIHRvcDogMCwKICAgICAgYmVoYXZpb3I6IHNjcm9sbCwKICAgICAgbGVmdDogaXRlbS5vZmZzZXRMZWZ0IC0gcm9vdC5vZmZzZXRMZWZ0CiAgICB9KTsKICB9OwogIGNvbnN0IG9uQ2xpY2tQcmV2ID0gKCk9PnsKICAgIGNvbnN0IGluZGljZXMgPSBnZXRFbGVtZW50c0luc2lkZUNvbnRhaW5lcigpOwogICAgLy8gV293ISBpdGVtcyBwZXIgcGFnZSBpcyBob3cgbWFueSBlbGVtZW50cyBhcmUgYmVpbmcgZGlzcGxheWVkIGluc2lkZSB0aGUgY29udGFpbmVyISEKICAgIGNvbnN0IGl0ZW1zUGVyUGFnZSA9IGluZGljZXMubGVuZ3RoOwogICAgY29uc3QgaXNTaG93aW5nRmlyc3QgPSBpbmRpY2VzWzBdID09PSAwOwogICAgY29uc3QgcGFnZUluZGV4ID0gTWF0aC5mbG9vcihpbmRpY2VzW2luZGljZXMubGVuZ3RoIC0gMV0gLyBpdGVtc1BlclBhZ2UpOwogICAgZ29Ub0l0ZW0oaXNTaG93aW5nRmlyc3QgPyBpdGVtcy5sZW5ndGggLSAxIDogKHBhZ2VJbmRleCAtIDEpICogaXRlbXNQZXJQYWdlKTsKICB9OwogIGNvbnN0IG9uQ2xpY2tOZXh0ID0gKCk9PnsKICAgIGNvbnN0IGluZGljZXMgPSBnZXRFbGVtZW50c0luc2lkZUNvbnRhaW5lcigpOwogICAgLy8gV293ISBpdGVtcyBwZXIgcGFnZSBpcyBob3cgbWFueSBlbGVtZW50cyBhcmUgYmVpbmcgZGlzcGxheWVkIGluc2lkZSB0aGUgY29udGFpbmVyISEKICAgIGNvbnN0IGl0ZW1zUGVyUGFnZSA9IGluZGljZXMubGVuZ3RoOwogICAgY29uc3QgaXNTaG93aW5nTGFzdCA9IGluZGljZXNbaW5kaWNlcy5sZW5ndGggLSAxXSA9PT0gaXRlbXMubGVuZ3RoIC0gMTsKICAgIGNvbnN0IHBhZ2VJbmRleCA9IE1hdGguZmxvb3IoaW5kaWNlc1swXSAvIGl0ZW1zUGVyUGFnZSk7CiAgICBnb1RvSXRlbShpc1Nob3dpbmdMYXN0ID8gMCA6IChwYWdlSW5kZXggKyAxKSAqIGl0ZW1zUGVyUGFnZSk7CiAgfTsKICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZWxlbWVudHMpPT5lbGVtZW50cy5mb3JFYWNoKChpdGVtKT0+ewogICAgICBjb25zdCBpbmRleCA9IE51bWJlcihpdGVtLnRhcmdldC5nZXRBdHRyaWJ1dGUoImRhdGEtc2xpZGVyLWl0ZW0iKSkgfHwgMDsKICAgICAgY29uc3QgZG90ID0gZG90cz8uaXRlbShpbmRleCk7CiAgICAgIGlmIChpdGVtLmlzSW50ZXJzZWN0aW5nKSB7CiAgICAgICAgZG90Py5zZXRBdHRyaWJ1dGUoImRpc2FibGVkIiwgIiIpOwogICAgICB9IGVsc2UgewogICAgICAgIGRvdD8ucmVtb3ZlQXR0cmlidXRlKCJkaXNhYmxlZCIpOwogICAgICB9CiAgICAgIGlmICghaW5maW5pdGUpIHsKICAgICAgICBpZiAoaW5kZXggPT09IDApIHsKICAgICAgICAgIGlmIChpdGVtLmlzSW50ZXJzZWN0aW5nKSB7CiAgICAgICAgICAgIHByZXY/LnNldEF0dHJpYnV0ZSgiZGlzYWJsZWQiLCAiIik7CiAgICAgICAgICB9IGVsc2UgewogICAgICAgICAgICBwcmV2Py5yZW1vdmVBdHRyaWJ1dGUoImRpc2FibGVkIik7CiAgICAgICAgICB9CiAgICAgICAgfQogICAgICAgIGlmIChpbmRleCA9PT0gaXRlbXMubGVuZ3RoIC0gMSkgewogICAgICAgICAgaWYgKGl0ZW0uaXNJbnRlcnNlY3RpbmcpIHsKICAgICAgICAgICAgbmV4dD8uc2V0QXR0cmlidXRlKCJkaXNhYmxlZCIsICIiKTsKICAgICAgICAgIH0gZWxzZSB7CiAgICAgICAgICAgIG5leHQ/LnJlbW92ZUF0dHJpYnV0ZSgiZGlzYWJsZWQiKTsKICAgICAgICAgIH0KICAgICAgICB9CiAgICAgIH0KICAgIH0pLCB7CiAgICB0aHJlc2hvbGQ6IFRIUkVTSE9MRCwKICAgIHJvb3Q6IHNsaWRlcgogIH0pOwogIGl0ZW1zLmZvckVhY2goKGl0ZW0pPT5vYnNlcnZlci5vYnNlcnZlKGl0ZW0pKTsKICBmb3IobGV0IGl0ID0gMDsgaXQgPCAoZG90cz8ubGVuZ3RoID8/IDApOyBpdCsrKXsKICAgIGRvdHM/Lml0ZW0oaXQpLmFkZEV2ZW50TGlzdGVuZXIoImNsaWNrIiwgKCk9PmdvVG9JdGVtKGl0KSk7CiAgfQogIHByZXY/LmFkZEV2ZW50TGlzdGVuZXIoImNsaWNrIiwgb25DbGlja1ByZXYpOwogIG5leHQ/LmFkZEV2ZW50TGlzdGVuZXIoImNsaWNrIiwgb25DbGlja05leHQpOwogIGNvbnN0IHRpbWVvdXQgPSBpbnRlcnZhbCAmJiBzZXRJbnRlcnZhbChvbkNsaWNrTmV4dCwgaW50ZXJ2YWwpOwogIC8vIFVucmVnaXN0ZXIgY2FsbGJhY2tzCiAgcmV0dXJuICgpPT57CiAgICBmb3IobGV0IGl0ID0gMDsgaXQgPCAoZG90cz8ubGVuZ3RoID8/IDApOyBpdCsrKXsKICAgICAgZG90cz8uaXRlbShpdCkucmVtb3ZlRXZlbnRMaXN0ZW5lcigiY2xpY2siLCAoKT0+Z29Ub0l0ZW0oaXQpKTsKICAgIH0KICAgIHByZXY/LnJlbW92ZUV2ZW50TGlzdGVuZXIoImNsaWNrIiwgb25DbGlja1ByZXYpOwogICAgbmV4dD8ucmVtb3ZlRXZlbnRMaXN0ZW5lcigiY2xpY2siLCBvbkNsaWNrTmV4dCk7CiAgICBvYnNlcnZlci5kaXNjb25uZWN0KCk7CiAgICBjbGVhckludGVydmFsKHRpbWVvdXQpOwogIH07Cn0pKHsicm9vdElkIjoiUDAtNjU3NTg3NiIsInNjcm9sbCI6InNtb290aCIsImludGVydmFsIjo1MDAwLCJpbmZpbml0ZSI6ZmFsc2V9KSkp"
                defer=""
                nonce=""
              ></script>
            </div>
            <div
              class="hidden sm:grid sm:grid-cols-3 items-center border-b border-base-200 w-full px-6"
            >
              <ul class="flex gap-6 col-span-1 justify-start">
                <li class="group flex items-center">
                  <a href="/feminino" class="py-6"
                    ><span class="group-hover:underline text-xs font-thin"
                      >Feminino</span
                    ></a
                  >
                  <div
                    style="top: 0px; left: 0px; margin-top: 110px"
                    class="fixed hidden hover:flex group-hover:flex bg-base-100 z-50 items-start justify-center gap-6 border-t border-b-2 border-base-200 w-screen"
                  >
                    <img
                      src="https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/239/7733d479-0fd1-4f33-bed9-6f9e170655d6"
                      width="300"
                      height="332"
                      loading="lazy"
                      data-fresh-disable-lock="true"
                      srcset="
                        /live/invoke/website/loaders/image.ts?src=https%3A%2F%2Fozksgdmyrqcxcwhnbepg.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fassets%2F239%2F7733d479-0fd1-4f33-bed9-6f9e170655d6&amp;fit=cover&amp;width=300&amp;height=332 300w,
                        /live/invoke/website/loaders/image.ts?src=https%3A%2F%2Fozksgdmyrqcxcwhnbepg.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fassets%2F239%2F7733d479-0fd1-4f33-bed9-6f9e170655d6&amp;fit=cover&amp;width=600&amp;height=664 600w
                      "
                      class="p-6"
                    />
                    <ul class="flex items-start justify-center gap-6">
                      <li class="p-6">
                        <a href="/feminino/saias" class="hover:underline"
                          ><span>Novidades</span></a
                        >
                        <ul class="flex flex-col gap-1 mt-4">
                          <li>
                            <a
                              href="/feminino/vestidos"
                              class="hover:underline"
                              ><span class="text-xs">Mais vendidos</span></a
                            >
                          </li>
                          <li>
                            <a
                              href="/feminino/vestidos"
                              class="hover:underline"
                              ><span class="text-xs">Parcerias</span></a
                            >
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </li>
                <li class="group flex items-center">
                  <a href="/masculino" class="py-6"
                    ><span class="group-hover:underline text-xs font-thin"
                      >Masculino</span
                    ></a
                  >
                  <div
                    style="top: 0px; left: 0px; margin-top: 110px"
                    class="fixed hidden hover:flex group-hover:flex bg-base-100 z-50 items-start justify-center gap-6 border-t border-b-2 border-base-200 w-screen"
                  >
                    <img
                      src="https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/239/575c3b0f-1a2e-4ecb-aaad-532671dc553d"
                      width="300"
                      height="332"
                      loading="lazy"
                      data-fresh-disable-lock="true"
                      srcset="
                        /live/invoke/website/loaders/image.ts?src=https%3A%2F%2Fozksgdmyrqcxcwhnbepg.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fassets%2F239%2F575c3b0f-1a2e-4ecb-aaad-532671dc553d&amp;fit=cover&amp;width=300&amp;height=332 300w,
                        /live/invoke/website/loaders/image.ts?src=https%3A%2F%2Fozksgdmyrqcxcwhnbepg.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fassets%2F239%2F575c3b0f-1a2e-4ecb-aaad-532671dc553d&amp;fit=cover&amp;width=600&amp;height=664 600w
                      "
                      class="p-6"
                    />
                    <ul class="flex items-start justify-center gap-6">
                      <li class="p-6">
                        <a href="/masculino" class="hover:underline"
                          ><span>Novidades</span></a
                        >
                        <ul class="flex flex-col gap-1 mt-4">
                          <li>
                            <a href="/masculino" class="hover:underline"
                              ><span class="text-xs">Mais vendidos</span></a
                            >
                          </li>
                          <li>
                            <a href="/masculino" class="hover:underline"
                              ><span class="text-xs">Parcerias</span></a
                            >
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </li>
                <li class="group flex items-center">
                  <a href="/sale" class="py-6"
                    ><span class="group-hover:underline text-xs font-thin"
                      >Sale</span
                    ></a
                  >
                  <div
                    style="top: 0px; left: 0px; margin-top: 110px"
                    class="fixed hidden hover:flex group-hover:flex bg-base-100 z-50 items-start justify-center gap-6 border-t border-b-2 border-base-200 w-screen"
                  >
                    <img
                      src="https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/239/5e9310c0-c725-4643-ade3-f92a505bd1d6"
                      width="300"
                      height="332"
                      loading="lazy"
                      data-fresh-disable-lock="true"
                      srcset="
                        /live/invoke/website/loaders/image.ts?src=https%3A%2F%2Fozksgdmyrqcxcwhnbepg.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fassets%2F239%2F5e9310c0-c725-4643-ade3-f92a505bd1d6&amp;fit=cover&amp;width=300&amp;height=332 300w,
                        /live/invoke/website/loaders/image.ts?src=https%3A%2F%2Fozksgdmyrqcxcwhnbepg.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fassets%2F239%2F5e9310c0-c725-4643-ade3-f92a505bd1d6&amp;fit=cover&amp;width=600&amp;height=664 600w
                      "
                      class="p-6"
                    />
                    <ul class="flex items-start justify-center gap-6">
                      <li class="p-6">
                        <a href="/feminino" class="hover:underline"
                          ><span>Feminino</span></a
                        >
                        <ul class="flex flex-col gap-1 mt-4">
                          <li>
                            <a href="/feminino" class="hover:underline"
                              ><span class="text-xs">Camisetas</span></a
                            >
                          </li>
                          <li>
                            <a href="/feminino" class="hover:underline"
                              ><span class="text-xs">Camisas</span></a
                            >
                          </li>
                        </ul>
                      </li>
                      <li class="p-6">
                        <a href="/masculino" class="hover:underline"
                          ><span>Masculino</span></a
                        >
                        <ul class="flex flex-col gap-1 mt-4">
                          <li>
                            <a href="/masculino" class="hover:underline"
                              ><span class="text-xs">Camisetas</span></a
                            >
                          </li>
                          <li>
                            <a href="/masculino" class="hover:underline"
                              ><span class="text-xs">Regatas</span></a
                            >
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </li>
                <li class="group flex items-center">
                  <a href="/linktree" class="py-6"
                    ><span class="group-hover:underline text-xs font-thin"
                      >Link Tree</span
                    ></a
                  >
                </li>
              </ul>
              <div class="flex justify-center">
                <a
                  href="/"
                  aria-label="Store logo"
                  class="block"
                  data-current="true"
                  aria-current="page"
                  ><img
                    src="https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/2291/986b61d4-3847-4867-93c8-b550cb459cc7"
                    alt="Glamour logo by deco"
                    width="100"
                    height="16"
                    data-fresh-disable-lock="true"
                    srcset="
                      /live/invoke/website/loaders/image.ts?src=https%3A%2F%2Fozksgdmyrqcxcwhnbepg.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fassets%2F2291%2F986b61d4-3847-4867-93c8-b550cb459cc7&amp;fit=cover&amp;width=100&amp;height=16 100w,
                      /live/invoke/website/loaders/image.ts?src=https%3A%2F%2Fozksgdmyrqcxcwhnbepg.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fassets%2F2291%2F986b61d4-3847-4867-93c8-b550cb459cc7&amp;fit=cover&amp;width=200&amp;height=32 200w
                    "
                    loading="lazy"
                /></a>
              </div>
              <div
                class="flex-none flex items-center justify-end gap-6 col-span-1"
              >
                <div class="flex items-center text-xs font-thin gap-1">
                  <button
                    aria-label="search icon button"
                    type="button"
                    class="btn no-animation btn-circle btn-sm btn-ghost hidden sm:flex"
                  >
                    <svg width="20" height="20" stroke-width="0.1">
                      <use
                        href="/sprites.svg?__frsh_c=23d7a5fd9627e01d1ed21d67f4a41eeb2440812a#MagnifyingGlass"
                      ></use>
                    </svg></button
                  ><button
                    aria-label="search icon button"
                    type="button"
                    class="btn no-animation btn-circle btn-sm btn-ghost sm:hidden"
                  >
                    <svg width="20" height="20" stroke-width="0.1">
                      <use
                        href="/sprites.svg?__frsh_c=23d7a5fd9627e01d1ed21d67f4a41eeb2440812a#MagnifyingGlass"
                      ></use>
                    </svg></button
                  >SEARCH
                </div>
                <input id="P0-3670692" type="checkbox" class="modal-toggle" />
                <div class="modal">
                  <div
                    class="absolute top-0 bg-base-100 container"
                    style="margin-top: 110px"
                  >
                    <div
                      class="w-full grid gap-8 px-4 py-6 overflow-y-hidden"
                      style="grid-template-rows: min-content auto"
                    >
                      <form id="P0-5470817" action="/s" class="join">
                        <button
                          aria-label="Search"
                          for="P0-5470817"
                          tabindex="-1"
                          type="submit"
                          class="btn no-animation join-item btn-square"
                        >
                          <svg width="24" height="24" stroke-width="0.01">
                            <use
                              href="/sprites.svg?__frsh_c=23d7a5fd9627e01d1ed21d67f4a41eeb2440812a#MagnifyingGlass"
                            ></use>
                          </svg></button
                        ><input
                          id="search-input"
                          name="q"
                          placeholder="What are you looking for?"
                          role="combobox"
                          aria-controls="search-suggestion"
                          aria-haspopup="listbox"
                          aria-expanded="false"
                          autocomplete="off"
                          class="input input-bordered join-item flex-grow"
                        /><button
                          aria-label="search closed"
                          type="button"
                          class="btn no-animation join-item btn-ghost btn-square hidden sm:inline-flex"
                        >
                          <svg width="24" height="24" stroke-width="2">
                            <use
                              href="/sprites.svg?__frsh_c=23d7a5fd9627e01d1ed21d67f4a41eeb2440812a#XMark"
                            ></use>
                          </svg>
                        </button>
                      </form>
                      <div class="overflow-y-scroll hidden">
                        <div
                          class="gap-4 grid grid-cols-1 sm:grid-rows-1 sm:grid-cols-[150px_1fr]"
                        >
                          <div class="flex flex-col gap-6">
                            <span
                              role="heading"
                              aria-level="3"
                              class="font-medium text-xl"
                              >Sugestões</span
                            >
                            <ul
                              id="search-suggestion"
                              class="flex flex-col gap-6"
                            ></ul>
                          </div>
                          <div
                            class="flex flex-col pt-6 md:pt-0 gap-6 overflow-x-hidden"
                          >
                            <span
                              role="heading"
                              aria-level="3"
                              class="font-medium text-xl"
                              >Produtos sugeridos</span
                            >
                            <ul data-slider="true" class="carousel"></ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <label for="P0-3670692" class="modal-backdrop">Close</label>
                </div>
                <a
                  href="/account"
                  aria-label="Account"
                  class="flex items-center text-xs font-thin"
                  ><div class="flex btn btn-circle btn-sm btn-ghost gap-1">
                    <svg width="20" height="20" stroke-width="0.4">
                      <use
                        href="/sprites.svg?__frsh_c=23d7a5fd9627e01d1ed21d67f4a41eeb2440812a#User"
                      ></use>
                    </svg>
                  </div>
                  ACCOUNT</a
                ><a
                  href="/wishlist"
                  aria-label="Wishlist"
                  class="flex items-center text-xs font-thin"
                  ><button
                    aria-label="Wishlist"
                    class="flex btn btn-circle btn-sm btn-ghost gap-1"
                  >
                    <svg width="24" height="24" stroke-width="0.4">
                      <use
                        href="/sprites.svg?__frsh_c=23d7a5fd9627e01d1ed21d67f4a41eeb2440812a#Heart"
                      ></use>
                    </svg></button
                  >WISHLIST</a
                >
                <div class="flex items-center text-xs font-thin">
                  <div class="indicator">
                    <span
                      class="indicator-item badge badge-secondary badge-sm hidden"
                      >0</span
                    ><button
                      aria-label="open cart"
                      data-deco="false"
                      type="button"
                      class="btn no-animation btn-circle btn-sm btn-ghost"
                    >
                      <svg width="24" height="24" stroke-width="2">
                        <use
                          href="/sprites.svg?__frsh_c=23d7a5fd9627e01d1ed21d67f4a41eeb2440812a#ShoppingCart"
                        ></use>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <aside class="drawer-side h-full z-50 overflow-hidden">
          <label for="P0-2288527" class="drawer-overlay"></label>
          <div
            class="bg-base-100 grid grid-rows-[auto_1fr] h-full divide-y max-w-[100vw]"
          >
            <div class="flex justify-between items-center">
              <h1 class="px-4 py-3">
                <span class="font-medium text-2xl">Minha sacola</span>
              </h1>
              <button
                aria-label="X"
                type="button"
                class="btn no-animation btn btn-ghost"
              >
                <svg width="24" height="24" stroke-width="2">
                  <use
                    href="/sprites.svg?__frsh_c=23d7a5fd9627e01d1ed21d67f4a41eeb2440812a#XMark"
                  ></use>
                </svg>
              </button>
            </div>
            <div
              class="flex flex-col justify-center items-center overflow-hidden"
              style="min-width: min(100vw, 425px); max-width: 425px"
            >
              <div class="flex flex-col gap-6">
                <span class="font-medium text-2xl">Sua sacola está vazia</span
                ><button type="button" class="btn no-animation btn-outline">
                  Escolher produtos
                </button>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </header>
  </section>
  <section
    id="2423674817-0"
    data-manifest-key="site/sections/Images/Carousel.tsx"
  >
    <div
      id="P0-8348376"
      class="grid grid-cols-[48px_1fr_48px] sm:grid-cols-[120px_1fr_120px] grid-rows-[1fr_48px_1fr_64px] sm:min-h-min min-h-[660px]"
    >
      <ul
        data-slider="true"
        class="carousel carousel-center w-full col-span-full row-span-full gap-6"
      >
        <li data-slider-item="0" class="carousel-item w-full">
          <a
            id="P0-8348376::0"
            href="/feminino"
            aria-label="Explore collection"
            class="relative overflow-y-hidden w-full"
            ><div
              class="absolute top-0 md:bottom-0 bottom-1/2 left-0 right-0 sm:right-auto max-w-[407px] flex flex-col justify-end gap-4 px-8 py-12"
            >
              <span class="text-2xl font-light text-base-100">VTEX Store</span
              ><span class="font-normal text-4xl text-base-100"
                >Visit our site and start building now:</span
              ><button
                aria-label="Explore collection"
                type="button"
                class="btn no-animation bg-base-100 text-sm font-light py-4 px-6 w-fit"
              >
                Explore collection
              </button>
            </div>
            <picture
              ><source
                media="(max-width: 767px)"
                fetchpriority="high"
                width="430"
                height="590"
                data-fresh-disable-lock="true"
                srcset="
                  /live/invoke/website/loaders/image.ts?src=https%3A%2F%2Fozksgdmyrqcxcwhnbepg.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fassets%2F2291%2Fc007e481-b1c6-4122-9761-5c3e554512c1&amp;fit=cover&amp;width=430&amp;height=590  430w,
                  /live/invoke/website/loaders/image.ts?src=https%3A%2F%2Fozksgdmyrqcxcwhnbepg.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fassets%2F2291%2Fc007e481-b1c6-4122-9761-5c3e554512c1&amp;fit=cover&amp;width=860&amp;height=1180 860w
                " />
              <source
                media="(min-width: 768px)"
                fetchpriority="high"
                width="1440"
                height="600"
                data-fresh-disable-lock="true"
                srcset="
                  /live/invoke/website/loaders/image.ts?src=https%3A%2F%2Fozksgdmyrqcxcwhnbepg.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fassets%2F2291%2Fd057fc10-5616-4f12-8d4c-201bb47a81f5&amp;fit=cover&amp;width=1440&amp;height=600  1440w,
                  /live/invoke/website/loaders/image.ts?src=https%3A%2F%2Fozksgdmyrqcxcwhnbepg.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fassets%2F2291%2Fd057fc10-5616-4f12-8d4c-201bb47a81f5&amp;fit=cover&amp;width=2880&amp;height=1200 2880w
                " />
              <img
                loading="eager"
                src="https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/2291/d057fc10-5616-4f12-8d4c-201bb47a81f5"
                alt="Feminino"
                class="object-cover w-full h-full" /></picture
          ></a>
          <script
            defer=""
            src="data:text/javascript;base64,ZGVjb2RlVVJJQ29tcG9uZW50KGVzY2FwZSgoKGlkLCBldmVudCk9PnsKICAgICAgY29uc3QgZWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTsKICAgICAgaWYgKCFlbGVtKSB7CiAgICAgICAgcmV0dXJuIGNvbnNvbGUud2FybihgQ291bGQgbm90IGZpbmQgZWxlbWVudCAke2lkfS4gQ2xpY2sgZXZlbnQgd2lsbCBub3QgYmUgc2VuZC4gVGhpcyB3aWxsIGNhdXNlIGxvc3MgaW4gYW5hbHl0aWNzYCk7CiAgICAgIH0KICAgICAgZWxlbS5hZGRFdmVudExpc3RlbmVyKCJjbGljayIsICgpPT57CiAgICAgICAgZ2xvYmFsVGhpcy53aW5kb3cuREVDTy5ldmVudHMuZGlzcGF0Y2goZXZlbnQpOwogICAgICB9KTsKICAgIH0pKCJQMC04MzQ4Mzc2OjowIiwgeyJuYW1lIjoic2VsZWN0X3Byb21vdGlvbiIsInBhcmFtcyI6eyJwcm9tb3Rpb25fbmFtZSI6IkZlbWluaW5vIn19KSkp"
            nonce=""
          ></script>
          <script
            defer=""
            src="data:text/javascript;base64,ZGVjb2RlVVJJQ29tcG9uZW50KGVzY2FwZSgoKGlkLCBldmVudCk9PnsKICAgICAgY29uc3QgZWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTsKICAgICAgaWYgKCFlbGVtKSB7CiAgICAgICAgcmV0dXJuIGNvbnNvbGUud2FybihgQ291bGQgbm90IGZpbmQgZWxlbWVudCAke2lkfS4gQ2xpY2sgZXZlbnQgd2lsbCBub3QgYmUgc2VuZC4gVGhpcyB3aWxsIGNhdXNlIGxvc3MgaW4gYW5hbHl0aWNzYCk7CiAgICAgIH0KICAgICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGl0ZW1zKT0+ewogICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBpdGVtcyl7CiAgICAgICAgICBpZiAoIWl0ZW0uaXNJbnRlcnNlY3RpbmcpIGNvbnRpbnVlOwogICAgICAgICAgZ2xvYmFsVGhpcy53aW5kb3cuREVDTy5ldmVudHMuZGlzcGF0Y2goZXZlbnQpOwogICAgICAgICAgb2JzZXJ2ZXIudW5vYnNlcnZlKGVsZW0pOwogICAgICAgIH0KICAgICAgfSk7CiAgICAgIG9ic2VydmVyLm9ic2VydmUoZWxlbSk7CiAgICB9KSgiUDAtODM0ODM3Njo6MCIsIHsibmFtZSI6InZpZXdfcHJvbW90aW9uIiwicGFyYW1zIjp7InByb21vdGlvbl9uYW1lIjoiRmVtaW5pbm8ifX0pKSk="
            nonce=""
          ></script>
        </li>
        <li data-slider-item="1" class="carousel-item w-full">
          <a
            id="P0-8348376::1"
            href="/masculino"
            aria-label="Explore collection"
            class="relative overflow-y-hidden w-full"
            ><div
              class="absolute top-0 md:bottom-0 bottom-1/2 left-0 right-0 sm:right-auto max-w-[407px] flex flex-col justify-end gap-4 px-8 py-12"
            >
              <span class="text-2xl font-light text-base-100">VTEX Store</span
              ><span class="font-normal text-4xl text-base-100"
                >Visit our site and start building now:</span
              ><button
                aria-label="Explore collection"
                type="button"
                class="btn no-animation bg-base-100 text-sm font-light py-4 px-6 w-fit"
              >
                Explore collection
              </button>
            </div>
            <picture
              ><source
                media="(max-width: 767px)"
                fetchpriority="auto"
                width="430"
                height="590"
                data-fresh-disable-lock="true"
                srcset="
                  /live/invoke/website/loaders/image.ts?src=https%3A%2F%2Fozksgdmyrqcxcwhnbepg.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fassets%2F2291%2Fc007e481-b1c6-4122-9761-5c3e554512c1&amp;fit=cover&amp;width=430&amp;height=590  430w,
                  /live/invoke/website/loaders/image.ts?src=https%3A%2F%2Fozksgdmyrqcxcwhnbepg.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fassets%2F2291%2Fc007e481-b1c6-4122-9761-5c3e554512c1&amp;fit=cover&amp;width=860&amp;height=1180 860w
                " />
              <source
                media="(min-width: 768px)"
                fetchpriority="auto"
                width="1440"
                height="600"
                data-fresh-disable-lock="true"
                srcset="
                  /live/invoke/website/loaders/image.ts?src=https%3A%2F%2Fozksgdmyrqcxcwhnbepg.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fassets%2F2291%2Fd057fc10-5616-4f12-8d4c-201bb47a81f5&amp;fit=cover&amp;width=1440&amp;height=600  1440w,
                  /live/invoke/website/loaders/image.ts?src=https%3A%2F%2Fozksgdmyrqcxcwhnbepg.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fassets%2F2291%2Fd057fc10-5616-4f12-8d4c-201bb47a81f5&amp;fit=cover&amp;width=2880&amp;height=1200 2880w
                " />
              <img
                loading="lazy"
                src="https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/2291/d057fc10-5616-4f12-8d4c-201bb47a81f5"
                alt="Masculino"
                class="object-cover w-full h-full" /></picture
          ></a>
          <script
            defer=""
            src="data:text/javascript;base64,ZGVjb2RlVVJJQ29tcG9uZW50KGVzY2FwZSgoKGlkLCBldmVudCk9PnsKICAgICAgY29uc3QgZWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTsKICAgICAgaWYgKCFlbGVtKSB7CiAgICAgICAgcmV0dXJuIGNvbnNvbGUud2FybihgQ291bGQgbm90IGZpbmQgZWxlbWVudCAke2lkfS4gQ2xpY2sgZXZlbnQgd2lsbCBub3QgYmUgc2VuZC4gVGhpcyB3aWxsIGNhdXNlIGxvc3MgaW4gYW5hbHl0aWNzYCk7CiAgICAgIH0KICAgICAgZWxlbS5hZGRFdmVudExpc3RlbmVyKCJjbGljayIsICgpPT57CiAgICAgICAgZ2xvYmFsVGhpcy53aW5kb3cuREVDTy5ldmVudHMuZGlzcGF0Y2goZXZlbnQpOwogICAgICB9KTsKICAgIH0pKCJQMC04MzQ4Mzc2OjoxIiwgeyJuYW1lIjoic2VsZWN0X3Byb21vdGlvbiIsInBhcmFtcyI6eyJwcm9tb3Rpb25fbmFtZSI6Ik1hc2N1bGlubyJ9fSkpKQ=="
            nonce=""
          ></script>
          <script
            defer=""
            src="data:text/javascript;base64,ZGVjb2RlVVJJQ29tcG9uZW50KGVzY2FwZSgoKGlkLCBldmVudCk9PnsKICAgICAgY29uc3QgZWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTsKICAgICAgaWYgKCFlbGVtKSB7CiAgICAgICAgcmV0dXJuIGNvbnNvbGUud2FybihgQ291bGQgbm90IGZpbmQgZWxlbWVudCAke2lkfS4gQ2xpY2sgZXZlbnQgd2lsbCBub3QgYmUgc2VuZC4gVGhpcyB3aWxsIGNhdXNlIGxvc3MgaW4gYW5hbHl0aWNzYCk7CiAgICAgIH0KICAgICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGl0ZW1zKT0+ewogICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBpdGVtcyl7CiAgICAgICAgICBpZiAoIWl0ZW0uaXNJbnRlcnNlY3RpbmcpIGNvbnRpbnVlOwogICAgICAgICAgZ2xvYmFsVGhpcy53aW5kb3cuREVDTy5ldmVudHMuZGlzcGF0Y2goZXZlbnQpOwogICAgICAgICAgb2JzZXJ2ZXIudW5vYnNlcnZlKGVsZW0pOwogICAgICAgIH0KICAgICAgfSk7CiAgICAgIG9ic2VydmVyLm9ic2VydmUoZWxlbSk7CiAgICB9KSgiUDAtODM0ODM3Njo6MSIsIHsibmFtZSI6InZpZXdfcHJvbW90aW9uIiwicGFyYW1zIjp7InByb21vdGlvbl9uYW1lIjoiTWFzY3VsaW5vIn19KSkp"
            nonce=""
          ></script>
        </li>
        <li data-slider-item="2" class="carousel-item w-full">
          <a
            id="P0-8348376::2"
            href="/feminino/roupas/vestidos"
            aria-label="Explore collection"
            class="relative overflow-y-hidden w-full"
            ><div
              class="absolute top-0 md:bottom-0 bottom-1/2 left-0 right-0 sm:right-auto max-w-[407px] flex flex-col justify-end gap-4 px-8 py-12"
            >
              <span class="text-2xl font-light text-base-100">VTEX Store</span
              ><span class="font-normal text-4xl text-base-100"
                >Visit our site and start building now:</span
              ><button
                aria-label="Explore collection"
                type="button"
                class="btn no-animation bg-base-100 text-sm font-light py-4 px-6 w-fit"
              >
                Explore collection
              </button>
            </div>
            <picture
              ><source
                media="(max-width: 767px)"
                fetchpriority="auto"
                width="430"
                height="590"
                data-fresh-disable-lock="true"
                srcset="
                  /live/invoke/website/loaders/image.ts?src=https%3A%2F%2Fozksgdmyrqcxcwhnbepg.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fassets%2F2291%2Fc007e481-b1c6-4122-9761-5c3e554512c1&amp;fit=cover&amp;width=430&amp;height=590  430w,
                  /live/invoke/website/loaders/image.ts?src=https%3A%2F%2Fozksgdmyrqcxcwhnbepg.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fassets%2F2291%2Fc007e481-b1c6-4122-9761-5c3e554512c1&amp;fit=cover&amp;width=860&amp;height=1180 860w
                " />
              <source
                media="(min-width: 768px)"
                fetchpriority="auto"
                width="1440"
                height="600"
                data-fresh-disable-lock="true"
                srcset="
                  /live/invoke/website/loaders/image.ts?src=https%3A%2F%2Fozksgdmyrqcxcwhnbepg.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fassets%2F2291%2Fd057fc10-5616-4f12-8d4c-201bb47a81f5&amp;fit=cover&amp;width=1440&amp;height=600  1440w,
                  /live/invoke/website/loaders/image.ts?src=https%3A%2F%2Fozksgdmyrqcxcwhnbepg.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fassets%2F2291%2Fd057fc10-5616-4f12-8d4c-201bb47a81f5&amp;fit=cover&amp;width=2880&amp;height=1200 2880w
                " />
              <img
                loading="lazy"
                src="https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/2291/d057fc10-5616-4f12-8d4c-201bb47a81f5"
                alt="Vestidos"
                class="object-cover w-full h-full" /></picture
          ></a>
          <script
            defer=""
            src="data:text/javascript;base64,ZGVjb2RlVVJJQ29tcG9uZW50KGVzY2FwZSgoKGlkLCBldmVudCk9PnsKICAgICAgY29uc3QgZWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTsKICAgICAgaWYgKCFlbGVtKSB7CiAgICAgICAgcmV0dXJuIGNvbnNvbGUud2FybihgQ291bGQgbm90IGZpbmQgZWxlbWVudCAke2lkfS4gQ2xpY2sgZXZlbnQgd2lsbCBub3QgYmUgc2VuZC4gVGhpcyB3aWxsIGNhdXNlIGxvc3MgaW4gYW5hbHl0aWNzYCk7CiAgICAgIH0KICAgICAgZWxlbS5hZGRFdmVudExpc3RlbmVyKCJjbGljayIsICgpPT57CiAgICAgICAgZ2xvYmFsVGhpcy53aW5kb3cuREVDTy5ldmVudHMuZGlzcGF0Y2goZXZlbnQpOwogICAgICB9KTsKICAgIH0pKCJQMC04MzQ4Mzc2OjoyIiwgeyJuYW1lIjoic2VsZWN0X3Byb21vdGlvbiIsInBhcmFtcyI6eyJwcm9tb3Rpb25fbmFtZSI6IlZlc3RpZG9zIn19KSkp"
            nonce=""
          ></script>
          <script
            defer=""
            src="data:text/javascript;base64,ZGVjb2RlVVJJQ29tcG9uZW50KGVzY2FwZSgoKGlkLCBldmVudCk9PnsKICAgICAgY29uc3QgZWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTsKICAgICAgaWYgKCFlbGVtKSB7CiAgICAgICAgcmV0dXJuIGNvbnNvbGUud2FybihgQ291bGQgbm90IGZpbmQgZWxlbWVudCAke2lkfS4gQ2xpY2sgZXZlbnQgd2lsbCBub3QgYmUgc2VuZC4gVGhpcyB3aWxsIGNhdXNlIGxvc3MgaW4gYW5hbHl0aWNzYCk7CiAgICAgIH0KICAgICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGl0ZW1zKT0+ewogICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBpdGVtcyl7CiAgICAgICAgICBpZiAoIWl0ZW0uaXNJbnRlcnNlY3RpbmcpIGNvbnRpbnVlOwogICAgICAgICAgZ2xvYmFsVGhpcy53aW5kb3cuREVDTy5ldmVudHMuZGlzcGF0Y2goZXZlbnQpOwogICAgICAgICAgb2JzZXJ2ZXIudW5vYnNlcnZlKGVsZW0pOwogICAgICAgIH0KICAgICAgfSk7CiAgICAgIG9ic2VydmVyLm9ic2VydmUoZWxlbSk7CiAgICB9KSgiUDAtODM0ODM3Njo6MiIsIHsibmFtZSI6InZpZXdfcHJvbW90aW9uIiwicGFyYW1zIjp7InByb21vdGlvbl9uYW1lIjoiVmVzdGlkb3MifX0pKSk="
            nonce=""
          ></script>
        </li>
      </ul>
      <div
        class="flex items-center justify-center z-10 col-start-1 row-start-2"
      >
        <button
          data-slide="prev"
          aria-label="Previous item"
          class="btn btn-circle glass"
        >
          <svg width="24" height="24" stroke-width="3" class="text-base-100">
            <use
              href="/sprites.svg?__frsh_c=23d7a5fd9627e01d1ed21d67f4a41eeb2440812a#ChevronLeft"
            ></use>
          </svg>
        </button>
      </div>
      <div
        class="flex items-center justify-center z-10 col-start-3 row-start-2"
      >
        <button
          data-slide="next"
          aria-label="Next item"
          class="btn btn-circle glass"
        >
          <svg width="24" height="24" stroke-width="3" class="text-base-100">
            <use
              href="/sprites.svg?__frsh_c=23d7a5fd9627e01d1ed21d67f4a41eeb2440812a#ChevronRight"
            ></use>
          </svg>
        </button>
      </div>
      <script
        src="data:text/javascript;base64,ZGVjb2RlVVJJQ29tcG9uZW50KGVzY2FwZSgoKHsgcm9vdElkLCBzY3JvbGwsIGludGVydmFsLCBpbmZpbml0ZSB9KT0+ewogIGNvbnN0IEFUVFJJQlVURVMgPSB7CiAgICAiZGF0YS1zbGlkZXIiOiAiZGF0YS1zbGlkZXIiLAogICAgImRhdGEtc2xpZGVyLWl0ZW0iOiAiZGF0YS1zbGlkZXItaXRlbSIsCiAgICAnZGF0YS1zbGlkZT0icHJldiInOiAnZGF0YS1zbGlkZT0icHJldiInLAogICAgJ2RhdGEtc2xpZGU9Im5leHQiJzogJ2RhdGEtc2xpZGU9Im5leHQiJywKICAgICJkYXRhLWRvdCI6ICJkYXRhLWRvdCIKICB9OwogIC8vIFBlcmNlbnRhZ2Ugb2YgdGhlIGl0ZW0gdGhhdCBoYXMgdG8gYmUgaW5zaWRlIHRoZSBjb250YWluZXIKICAvLyBmb3IgaXQgaXQgYmUgY29uc2lkZXJlZCBhcyBpbnNpZGUgdGhlIGNvbnRhaW5lcgogIGNvbnN0IFRIUkVTSE9MRCA9IDAuNjsKICBjb25zdCBpbnRlcnNlY3Rpb25YID0gKGVsZW1lbnQsIGNvbnRhaW5lcik9PnsKICAgIGNvbnN0IGRlbHRhID0gY29udGFpbmVyLndpZHRoIC8gMV8wMDA7CiAgICBpZiAoZWxlbWVudC5yaWdodCA8IGNvbnRhaW5lci5sZWZ0IC0gZGVsdGEpIHsKICAgICAgcmV0dXJuIDAuMDsKICAgIH0KICAgIGlmIChlbGVtZW50LmxlZnQgPiBjb250YWluZXIucmlnaHQgKyBkZWx0YSkgewogICAgICByZXR1cm4gMC4wOwogICAgfQogICAgaWYgKGVsZW1lbnQubGVmdCA8IGNvbnRhaW5lci5sZWZ0IC0gZGVsdGEpIHsKICAgICAgcmV0dXJuIGVsZW1lbnQucmlnaHQgLSBjb250YWluZXIubGVmdCArIGRlbHRhOwogICAgfQogICAgaWYgKGVsZW1lbnQucmlnaHQgPiBjb250YWluZXIucmlnaHQgKyBkZWx0YSkgewogICAgICByZXR1cm4gY29udGFpbmVyLnJpZ2h0IC0gZWxlbWVudC5sZWZ0ICsgZGVsdGE7CiAgICB9CiAgICByZXR1cm4gZWxlbWVudC53aWR0aDsKICB9OwogIC8vIGFzIGFueSBhcmUgb2sgaW4gdHlwZWd1YXJkIGZ1bmN0aW9ucwogIGNvbnN0IGlzSFRNTEVsZW1lbnQgPSAoeCk9Pi8vIGRlbm8tbGludC1pZ25vcmUgbm8tZXhwbGljaXQtYW55CiAgICB0eXBlb2YgeC5vZmZzZXRMZWZ0ID09PSAibnVtYmVyIjsKICBjb25zdCByb290ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocm9vdElkKTsKICBjb25zdCBzbGlkZXIgPSByb290Py5xdWVyeVNlbGVjdG9yKGBbJHtBVFRSSUJVVEVTWyJkYXRhLXNsaWRlciJdfV1gKTsKICBjb25zdCBpdGVtcyA9IHJvb3Q/LnF1ZXJ5U2VsZWN0b3JBbGwoYFske0FUVFJJQlVURVNbImRhdGEtc2xpZGVyLWl0ZW0iXX1dYCk7CiAgY29uc3QgcHJldiA9IHJvb3Q/LnF1ZXJ5U2VsZWN0b3IoYFske0FUVFJJQlVURVNbJ2RhdGEtc2xpZGU9InByZXYiJ119XWApOwogIGNvbnN0IG5leHQgPSByb290Py5xdWVyeVNlbGVjdG9yKGBbJHtBVFRSSUJVVEVTWydkYXRhLXNsaWRlPSJuZXh0IiddfV1gKTsKICBjb25zdCBkb3RzID0gcm9vdD8ucXVlcnlTZWxlY3RvckFsbChgWyR7QVRUUklCVVRFU1siZGF0YS1kb3QiXX1dYCk7CiAgaWYgKCFyb290IHx8ICFzbGlkZXIgfHwgIWl0ZW1zIHx8IGl0ZW1zLmxlbmd0aCA9PT0gMCkgewogICAgY29uc29sZS53YXJuKCJNaXNzaW5nIG5lY2Vzc2FyeSBzbGlkZXIgYXR0cmlidXRlcy4gSXQgd2lsbCBub3Qgd29yayBhcyBpbnRlbmRlZC4gTmVjZXNzYXJ5IGVsZW1lbnRzOiIsIHsKICAgICAgcm9vdCwKICAgICAgc2xpZGVyLAogICAgICBpdGVtcywKICAgICAgcm9vdElkCiAgICB9KTsKICAgIHJldHVybjsKICB9CiAgY29uc3QgZ2V0RWxlbWVudHNJbnNpZGVDb250YWluZXIgPSAoKT0+ewogICAgY29uc3QgaW5kaWNlcyA9IFtdOwogICAgY29uc3Qgc2xpZGVyUmVjdCA9IHNsaWRlci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTsKICAgIGZvcihsZXQgaW5kZXggPSAwOyBpbmRleCA8IGl0ZW1zLmxlbmd0aDsgaW5kZXgrKyl7CiAgICAgIGNvbnN0IGl0ZW0gPSBpdGVtcy5pdGVtKGluZGV4KTsKICAgICAgY29uc3QgcmVjdCA9IGl0ZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7CiAgICAgIGNvbnN0IHJhdGlvID0gaW50ZXJzZWN0aW9uWChyZWN0LCBzbGlkZXJSZWN0KSAvIHJlY3Qud2lkdGg7CiAgICAgIGlmIChyYXRpbyA+IFRIUkVTSE9MRCkgewogICAgICAgIGluZGljZXMucHVzaChpbmRleCk7CiAgICAgIH0KICAgIH0KICAgIHJldHVybiBpbmRpY2VzOwogIH07CiAgY29uc3QgZ29Ub0l0ZW0gPSAoaW5kZXgpPT57CiAgICBjb25zdCBpdGVtID0gaXRlbXMuaXRlbShpbmRleCk7CiAgICBpZiAoIWlzSFRNTEVsZW1lbnQoaXRlbSkpIHsKICAgICAgY29uc29sZS53YXJuKGBFbGVtZW50IGF0IGluZGV4ICR7aW5kZXh9IGlzIG5vdCBhbiBodG1sIGVsZW1lbnQuIFNraXBwaW5nIGNhcm91c2VsYCk7CiAgICAgIHJldHVybjsKICAgIH0KICAgIHNsaWRlci5zY3JvbGxUbyh7CiAgICAgIHRvcDogMCwKICAgICAgYmVoYXZpb3I6IHNjcm9sbCwKICAgICAgbGVmdDogaXRlbS5vZmZzZXRMZWZ0IC0gcm9vdC5vZmZzZXRMZWZ0CiAgICB9KTsKICB9OwogIGNvbnN0IG9uQ2xpY2tQcmV2ID0gKCk9PnsKICAgIGNvbnN0IGluZGljZXMgPSBnZXRFbGVtZW50c0luc2lkZUNvbnRhaW5lcigpOwogICAgLy8gV293ISBpdGVtcyBwZXIgcGFnZSBpcyBob3cgbWFueSBlbGVtZW50cyBhcmUgYmVpbmcgZGlzcGxheWVkIGluc2lkZSB0aGUgY29udGFpbmVyISEKICAgIGNvbnN0IGl0ZW1zUGVyUGFnZSA9IGluZGljZXMubGVuZ3RoOwogICAgY29uc3QgaXNTaG93aW5nRmlyc3QgPSBpbmRpY2VzWzBdID09PSAwOwogICAgY29uc3QgcGFnZUluZGV4ID0gTWF0aC5mbG9vcihpbmRpY2VzW2luZGljZXMubGVuZ3RoIC0gMV0gLyBpdGVtc1BlclBhZ2UpOwogICAgZ29Ub0l0ZW0oaXNTaG93aW5nRmlyc3QgPyBpdGVtcy5sZW5ndGggLSAxIDogKHBhZ2VJbmRleCAtIDEpICogaXRlbXNQZXJQYWdlKTsKICB9OwogIGNvbnN0IG9uQ2xpY2tOZXh0ID0gKCk9PnsKICAgIGNvbnN0IGluZGljZXMgPSBnZXRFbGVtZW50c0luc2lkZUNvbnRhaW5lcigpOwogICAgLy8gV293ISBpdGVtcyBwZXIgcGFnZSBpcyBob3cgbWFueSBlbGVtZW50cyBhcmUgYmVpbmcgZGlzcGxheWVkIGluc2lkZSB0aGUgY29udGFpbmVyISEKICAgIGNvbnN0IGl0ZW1zUGVyUGFnZSA9IGluZGljZXMubGVuZ3RoOwogICAgY29uc3QgaXNTaG93aW5nTGFzdCA9IGluZGljZXNbaW5kaWNlcy5sZW5ndGggLSAxXSA9PT0gaXRlbXMubGVuZ3RoIC0gMTsKICAgIGNvbnN0IHBhZ2VJbmRleCA9IE1hdGguZmxvb3IoaW5kaWNlc1swXSAvIGl0ZW1zUGVyUGFnZSk7CiAgICBnb1RvSXRlbShpc1Nob3dpbmdMYXN0ID8gMCA6IChwYWdlSW5kZXggKyAxKSAqIGl0ZW1zUGVyUGFnZSk7CiAgfTsKICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZWxlbWVudHMpPT5lbGVtZW50cy5mb3JFYWNoKChpdGVtKT0+ewogICAgICBjb25zdCBpbmRleCA9IE51bWJlcihpdGVtLnRhcmdldC5nZXRBdHRyaWJ1dGUoImRhdGEtc2xpZGVyLWl0ZW0iKSkgfHwgMDsKICAgICAgY29uc3QgZG90ID0gZG90cz8uaXRlbShpbmRleCk7CiAgICAgIGlmIChpdGVtLmlzSW50ZXJzZWN0aW5nKSB7CiAgICAgICAgZG90Py5zZXRBdHRyaWJ1dGUoImRpc2FibGVkIiwgIiIpOwogICAgICB9IGVsc2UgewogICAgICAgIGRvdD8ucmVtb3ZlQXR0cmlidXRlKCJkaXNhYmxlZCIpOwogICAgICB9CiAgICAgIGlmICghaW5maW5pdGUpIHsKICAgICAgICBpZiAoaW5kZXggPT09IDApIHsKICAgICAgICAgIGlmIChpdGVtLmlzSW50ZXJzZWN0aW5nKSB7CiAgICAgICAgICAgIHByZXY/LnNldEF0dHJpYnV0ZSgiZGlzYWJsZWQiLCAiIik7CiAgICAgICAgICB9IGVsc2UgewogICAgICAgICAgICBwcmV2Py5yZW1vdmVBdHRyaWJ1dGUoImRpc2FibGVkIik7CiAgICAgICAgICB9CiAgICAgICAgfQogICAgICAgIGlmIChpbmRleCA9PT0gaXRlbXMubGVuZ3RoIC0gMSkgewogICAgICAgICAgaWYgKGl0ZW0uaXNJbnRlcnNlY3RpbmcpIHsKICAgICAgICAgICAgbmV4dD8uc2V0QXR0cmlidXRlKCJkaXNhYmxlZCIsICIiKTsKICAgICAgICAgIH0gZWxzZSB7CiAgICAgICAgICAgIG5leHQ/LnJlbW92ZUF0dHJpYnV0ZSgiZGlzYWJsZWQiKTsKICAgICAgICAgIH0KICAgICAgICB9CiAgICAgIH0KICAgIH0pLCB7CiAgICB0aHJlc2hvbGQ6IFRIUkVTSE9MRCwKICAgIHJvb3Q6IHNsaWRlcgogIH0pOwogIGl0ZW1zLmZvckVhY2goKGl0ZW0pPT5vYnNlcnZlci5vYnNlcnZlKGl0ZW0pKTsKICBmb3IobGV0IGl0ID0gMDsgaXQgPCAoZG90cz8ubGVuZ3RoID8/IDApOyBpdCsrKXsKICAgIGRvdHM/Lml0ZW0oaXQpLmFkZEV2ZW50TGlzdGVuZXIoImNsaWNrIiwgKCk9PmdvVG9JdGVtKGl0KSk7CiAgfQogIHByZXY/LmFkZEV2ZW50TGlzdGVuZXIoImNsaWNrIiwgb25DbGlja1ByZXYpOwogIG5leHQ/LmFkZEV2ZW50TGlzdGVuZXIoImNsaWNrIiwgb25DbGlja05leHQpOwogIGNvbnN0IHRpbWVvdXQgPSBpbnRlcnZhbCAmJiBzZXRJbnRlcnZhbChvbkNsaWNrTmV4dCwgaW50ZXJ2YWwpOwogIC8vIFVucmVnaXN0ZXIgY2FsbGJhY2tzCiAgcmV0dXJuICgpPT57CiAgICBmb3IobGV0IGl0ID0gMDsgaXQgPCAoZG90cz8ubGVuZ3RoID8/IDApOyBpdCsrKXsKICAgICAgZG90cz8uaXRlbShpdCkucmVtb3ZlRXZlbnRMaXN0ZW5lcigiY2xpY2siLCAoKT0+Z29Ub0l0ZW0oaXQpKTsKICAgIH0KICAgIHByZXY/LnJlbW92ZUV2ZW50TGlzdGVuZXIoImNsaWNrIiwgb25DbGlja1ByZXYpOwogICAgbmV4dD8ucmVtb3ZlRXZlbnRMaXN0ZW5lcigiY2xpY2siLCBvbkNsaWNrTmV4dCk7CiAgICBvYnNlcnZlci5kaXNjb25uZWN0KCk7CiAgICBjbGVhckludGVydmFsKHRpbWVvdXQpOwogIH07Cn0pKHsicm9vdElkIjoiUDAtODM0ODM3NiIsInNjcm9sbCI6InNtb290aCIsImluZmluaXRlIjp0cnVlfSkpKQ=="
        defer=""
        nonce=""
      ></script>
    </div>
  </section>
  <section
    id="2502225963-0"
    data-manifest-key="site/sections/Miscellaneous/Slide.tsx"
  >
    <div class="bg-secondary relative w-full overflow-hidden h-11">
      <div
        class="animate-sliding absolute top-0 left-0 flex flex-nowrap h-11"
      >
        <div class="flex items-center gap-x-10 mx-4">
          <span
            class="text-sm font-extralight text-base-content whitespace-nowrap"
            >HOT SALE</span
          ><span
            class="text-sm font-extralight text-base-content whitespace-nowrap"
            >HOT SALE</span
          ><span
            class="text-sm font-extralight text-base-content whitespace-nowrap"
            >HOT SALE</span
          ><span
            class="text-sm font-extralight text-base-content whitespace-nowrap"
            >HOT SALE</span
          ><span
            class="text-sm font-extralight text-base-content whitespace-nowrap"
            >HOT SALE</span
          ><span
            class="text-sm font-extralight text-base-content whitespace-nowrap"
            >HOT SALE</span
          ><span
            class="text-sm font-extralight text-base-content whitespace-nowrap"
            >HOT SALE</span
          ><span
            class="text-sm font-extralight text-base-content whitespace-nowrap"
            >HOT SALE</span
          ><span
            class="text-sm font-extralight text-base-content whitespace-nowrap"
            >HOT SALE</span
          ><span
            class="text-sm font-extralight text-base-content whitespace-nowrap"
            >HOT SALE</span
          ><span
            class="text-sm font-extralight text-base-content whitespace-nowrap"
            >HOT SALE</span
          ><span
            class="text-sm font-extralight text-base-content whitespace-nowrap"
            >HOT SALE</span
          ><span
            class="text-sm font-extralight text-base-content whitespace-nowrap"
            >HOT SALE</span
          ><span
            class="text-sm font-extralight text-base-content whitespace-nowrap"
            >HOT SALE</span
          ><span
            class="text-sm font-extralight text-base-content whitespace-nowrap"
            >HOT SALE</span
          ><span
            class="text-sm font-extralight text-base-content whitespace-nowrap"
            >HOT SALE</span
          ><span
            class="text-sm font-extralight text-base-content whitespace-nowrap"
            >HOT SALE</span
          ><span
            class="text-sm font-extralight text-base-content whitespace-nowrap"
            >HOT SALE</span
          ><span
            class="text-sm font-extralight text-base-content whitespace-nowrap"
            >HOT SALE</span
          ><span
            class="text-sm font-extralight text-base-content whitespace-nowrap"
            >HOT SALE</span
          ><span
            class="text-sm font-extralight text-base-content whitespace-nowrap"
            >HOT SALE</span
          ><span
            class="text-sm font-extralight text-base-content whitespace-nowrap"
            >HOT SALE</span
          ><span
            class="text-sm font-extralight text-base-content whitespace-nowrap"
            >HOT SALE</span
          ><span
            class="text-sm font-extralight text-base-content whitespace-nowrap"
            >HOT SALE</span
          ><span
            class="text-sm font-extralight text-base-content whitespace-nowrap"
            >HOT SALE</span
          ><span
            class="text-sm font-extralight text-base-content whitespace-nowrap"
            >HOT SALE</span
          ><span
            class="text-sm font-extralight text-base-content whitespace-nowrap"
            >HOT SALE</span
          ><span
            class="text-sm font-extralight text-base-content whitespace-nowrap"
            >HOT SALE</span
          ><span
            class="text-sm font-extralight text-base-content whitespace-nowrap"
            >HOT SALE</span
          ><span
            class="text-sm font-extralight text-base-content whitespace-nowrap"
            >HOT SALE</span
          >
        </div>
      </div>
    </div>
  </section>
  <section
    id="69923574-0"
    data-manifest-key="site/sections/Miscellaneous/CampaignTimer.tsx"
  >
    <div>
      <div
        class="container mx-auto flex flex-col lg:flex-row lg:items-center lg:justify-center lg:gap-16 py-16 sm:px-10 gap-4"
      >
        <div
          id="P0-9209379::expired"
          class="text-sm text-center lg:text-xl lg:text-left lg:max-w-lg"
        >
          <p>Design, develop and deliver complete experiences</p>
        </div>
        <div
          class="flex flex-wrap gap-8 lg:gap-16 items-center justify-center lg:justify-normal"
        >
          <div id="P0-9209379::counter" class="hidden">
            <div
              class="grid grid-flow-col md:gap-20 sm:gap-10 gap-5 text-center auto-cols-max items-center"
            >
              <div class="flex flex-col items-center">
                <span class="countdown font-normal text-xl lg:text-2xl"
                  ><span
                    id="P0-9209379::days"
                    class="md:text-8xl text-6xl font-thin text-base-content tracking-[-3px]"
                  ></span></span
                ><span class="md:text-2xl text-base-content font-thin"
                  >days</span
                >
              </div>
              <div class="flex flex-col items-center">
                <span class="countdown font-normal text-xl lg:text-2xl"
                  ><span
                    id="P0-9209379::hours"
                    class="md:text-8xl text-6xl font-thin text-base-content tracking-[-3px]"
                  ></span></span
                ><span class="md:text-2xl text-base-content font-thin"
                  >hours</span
                >
              </div>
              <div class="flex flex-col items-center">
                <span class="countdown font-normal text-xl lg:text-2xl"
                  ><span
                    id="P0-9209379::minutes"
                    class="md:text-8xl text-6xl font-thin text-base-content tracking-[-3px]"
                  ></span></span
                ><span class="md:text-2xl text-base-content font-thin"
                  >minutes</span
                >
              </div>
              <div class="flex flex-col items-center">
                <span class="countdown font-normal text-xl lg:text-2xl"
                  ><span
                    id="P0-9209379::seconds"
                    class="md:text-8xl text-6xl font-thin text-base-content tracking-[-3px]"
                  ></span></span
                ><span class="md:text-2xl text-base-content font-thin"
                  >seconds</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <script
      defer=""
      src="data:text/javascript;base64,ZGVjb2RlVVJJQ29tcG9uZW50KGVzY2FwZSgoKGV4cGlyZXNBdCwgcm9vdElkKT0+ewogIGNvbnN0IGV4cGlyYXRpb25EYXRlID0gbmV3IERhdGUoZXhwaXJlc0F0KS5nZXRUaW1lKCk7CiAgY29uc3QgZ2V0RGVsdGEgPSAoKT0+ewogICAgY29uc3QgZGVsdGEgPSBleHBpcmF0aW9uRGF0ZSAtIG5ldyBEYXRlKCkuZ2V0VGltZSgpOwogICAgY29uc3QgZGF5cyA9IE1hdGguZmxvb3IoZGVsdGEgLyAoMTAwMCAqIDYwICogNjAgKiAyNCkpOwogICAgY29uc3QgaG91cnMgPSBNYXRoLmZsb29yKGRlbHRhICUgKDEwMDAgKiA2MCAqIDYwICogMjQpIC8gKDEwMDAgKiA2MCAqIDYwKSk7CiAgICBjb25zdCBtaW51dGVzID0gTWF0aC5mbG9vcihkZWx0YSAlICgxMDAwICogNjAgKiA2MCkgLyAoMTAwMCAqIDYwKSk7CiAgICBjb25zdCBzZWNvbmRzID0gTWF0aC5mbG9vcihkZWx0YSAlICgxMDAwICogNjApIC8gMTAwMCk7CiAgICByZXR1cm4gewogICAgICBkYXlzLAogICAgICBob3VycywKICAgICAgbWludXRlcywKICAgICAgc2Vjb25kcwogICAgfTsKICB9OwogIGNvbnN0IHNldFZhbHVlID0gKGlkLCB2YWx1ZSk9PnsKICAgIGNvbnN0IGVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7CiAgICBpZiAoIWVsZW0pIHJldHVybjsKICAgIGVsZW0uc3R5bGUuc2V0UHJvcGVydHkoIi0tdmFsdWUiLCB2YWx1ZS50b1N0cmluZygpKTsKICB9OwogIGNvbnN0IHN0YXJ0ID0gKCk9PnNldEludGVydmFsKCgpPT57CiAgICAgIGNvbnN0IHsgZGF5cywgaG91cnMsIG1pbnV0ZXMsIHNlY29uZHMgfSA9IGdldERlbHRhKCk7CiAgICAgIGNvbnN0IGlzRXhwaXJlZCA9IGRheXMgKyBob3VycyArIG1pbnV0ZXMgKyBzZWNvbmRzIDwgMDsKICAgICAgaWYgKGlzRXhwaXJlZCkgewogICAgICAgIGNvbnN0IGV4cGlyZWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtyb290SWR9OjpleHBpcmVkYCk7CiAgICAgICAgY29uc3QgY291bnRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3Jvb3RJZH06OmNvdW50ZXJgKTsKICAgICAgICBleHBpcmVkICYmIGV4cGlyZWQuY2xhc3NMaXN0LnJlbW92ZSgiaGlkZGVuIik7CiAgICAgICAgY291bnRlciAmJiBjb3VudGVyLmNsYXNzTGlzdC5hZGQoImhpZGRlbiIpOwogICAgICB9IGVsc2UgewogICAgICAgIHNldFZhbHVlKGAke3Jvb3RJZH06OmRheXNgLCBkYXlzKTsKICAgICAgICBzZXRWYWx1ZShgJHtyb290SWR9Ojpob3Vyc2AsIGhvdXJzKTsKICAgICAgICBzZXRWYWx1ZShgJHtyb290SWR9OjptaW51dGVzYCwgbWludXRlcyk7CiAgICAgICAgc2V0VmFsdWUoYCR7cm9vdElkfTo6c2Vjb25kc2AsIHNlY29uZHMpOwogICAgICB9CiAgICB9LCAxXzAwMCk7CiAgZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gImNvbXBsZXRlIiA/IHN0YXJ0KCkgOiBhZGRFdmVudExpc3RlbmVyKCJsb2FkIiwgc3RhcnQpOwp9KSgiMjAyNC0wMy0xNVQxNzoyMzowMC4wMDBaIiwgIlAwLTkyMDkzNzkiKSkp"
      nonce=""
    ></script>
  </section>
  <section
    id="297675628-0"
    data-manifest-key="site/sections/Miscellaneous/Slide.tsx"
  >
    <div class="bg-secondary relative w-full overflow-hidden h-11">
      <div
        class="animate-sliding absolute top-0 left-0 flex flex-nowrap h-11"
      >
        <div class="flex items-center gap-x-10 mx-4">
          <span
            class="text-sm font-extralight text-base-content whitespace-nowrap"
            >HOT SALE</span
          ><span
            class="text-sm font-extralight text-base-content whitespace-nowrap"
            >HOT SALE</span
          ><span
            class="text-sm font-extralight text-base-content whitespace-nowrap"
            >HOT SALE</span
          ><span
            class="text-sm font-extralight text-base-content whitespace-nowrap"
            >HOT SALE</span
          ><span
            class="text-sm font-extralight text-base-content whitespace-nowrap"
            >HOT SALE</span
          ><span
            class="text-sm font-extralight text-base-content whitespace-nowrap"
            >HOT SALE</span
          ><span
            class="text-sm font-extralight text-base-content whitespace-nowrap"
            >HOT SALE</span
          ><span
            class="text-sm font-extralight text-base-content whitespace-nowrap"
            >HOT SALE</span
          ><span
            class="text-sm font-extralight text-base-content whitespace-nowrap"
            >HOT SALE</span
          ><span
            class="text-sm font-extralight text-base-content whitespace-nowrap"
            >HOT SALE</span
          ><span
            class="text-sm font-extralight text-base-content whitespace-nowrap"
            >HOT SALE</span
          ><span
            class="text-sm font-extralight text-base-content whitespace-nowrap"
            >HOT SALE</span
          ><span
            class="text-sm font-extralight text-base-content whitespace-nowrap"
            >HOT SALE</span
          ><span
            class="text-sm font-extralight text-base-content whitespace-nowrap"
            >HOT SALE</span
          ><span
            class="text-sm font-extralight text-base-content whitespace-nowrap"
            >HOT SALE</span
          >
        </div>
      </div>
    </div>
  </section>
  <section
    id="1244009340-0"
    data-manifest-key="site/sections/Product/ProductShelf.tsx"
  >
    <button
      f-partial="/deco/render?props=%7B%7D&amp;href=https%3A%2F%2Fstorefront-vtex.deco.site%2F&amp;pathTemplate=%2F&amp;renderSalt=0&amp;framework=fresh&amp;resolveChain=%5B2%2C%22website%2Fhandlers%2Ffresh.ts%22%2C0%2C%22page%22%2C2%2C%22resolved%22%2C1%2C%22pages-home-c4bcbfb771e9%22%2C2%2C%22website%2Fpages%2FPage.tsx%22%2C0%2C%22sections%22%2C0%2C%225%22%5D&amp;fresh-partial=true&amp;partialMode=replace"
      f-client-nav="true"
      id="1244009340-0-partial-onload"
      style="display: none"
    ></button>
    <script
      defer=""
      src="data:text/javascript;base64,ZGVjb2RlVVJJQ29tcG9uZW50KGVzY2FwZSgoKChpZCk9PnsKICBmdW5jdGlvbiBpbml0KCkgewogICAgY29uc3QgZWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTsKICAgIGNvbnN0IHBhcmVudCA9IGVsZW0/LnBhcmVudEVsZW1lbnQ7CiAgICBpZiAoZWxlbSA9PSBudWxsIHx8IHBhcmVudCA9PSBudWxsKSB7CiAgICAgIGNvbnNvbGUuZXJyb3IoYE1pc3NpbmcgZWxlbWVudCBvZiBpZCAke2lkfSBvciBpdHMgcGFyZW50IGVsZW1lbnQuIEFzeW5jIHJlbmRlcmluZyB3aWxsIE5PVCB3b3JrIHByb3Blcmx5YCk7CiAgICAgIHJldHVybjsKICAgIH0KICAgIGNvbnN0IG9ic2VydmVBbmRDbG9zZSA9IChlKT0+ewogICAgICBlLmZvckVhY2goKGVudHJ5KT0+ewogICAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZykgewogICAgICAgICAgZWxlbS5jbGljaygpOwogICAgICAgICAgb2JzZXJ2ZXIuZGlzY29ubmVjdCgpOwogICAgICAgIH0KICAgICAgfSk7CiAgICB9OwogICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIob2JzZXJ2ZUFuZENsb3NlKTsKICAgIG9ic2VydmVyLm9ic2VydmUocGFyZW50KTsKICAgIG9ic2VydmVBbmRDbG9zZShvYnNlcnZlci50YWtlUmVjb3JkcygpKTsKICB9CiAgaWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgPT09ICJjb21wbGV0ZSIpIHsKICAgIGluaXQoKTsKICB9IGVsc2UgewogICAgYWRkRXZlbnRMaXN0ZW5lcigibG9hZCIsIGluaXQpOwogIH0KfSkoIjEyNDQwMDkzNDAtMC1wYXJ0aWFsLW9ubG9hZCIpKSkp"
      nonce=""
    ></script>
    <div style="height: 716px" class="flex justify-center items-center">
      <span class="loading loading-spinner"></span>
    </div>
  </section>
  <section
    id="45181986-0"
    data-manifest-key="site/sections/Images/ShoppableBanner.tsx"
  >
    <div class="container">
      <div class="card lg:card-side rounded grid grid-cols-1 lg:grid-cols-2">
        <figure class="relative">
          <picture
            ><source
              media="(max-width: 767px)"
              width="150"
              height="150"
              data-fresh-disable-lock="true"
              srcset="
                /live/invoke/website/loaders/image.ts?src=https%3A%2F%2Fozksgdmyrqcxcwhnbepg.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fassets%2F2291%2F23be366c-fa07-4520-9338-387ce77acabb&amp;fit=cover&amp;width=150&amp;height=150 150w,
                /live/invoke/website/loaders/image.ts?src=https%3A%2F%2Fozksgdmyrqcxcwhnbepg.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fassets%2F2291%2F23be366c-fa07-4520-9338-387ce77acabb&amp;fit=cover&amp;width=300&amp;height=300 300w
              " />
            <source
              media="(min-width: 768px)"
              width="384"
              height="227"
              data-fresh-disable-lock="true"
              srcset="
                /live/invoke/website/loaders/image.ts?src=https%3A%2F%2Fozksgdmyrqcxcwhnbepg.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fassets%2F2291%2Fb79dcfc0-45b8-40c4-a3ba-310e66995529&amp;fit=cover&amp;width=384&amp;height=227 384w,
                /live/invoke/website/loaders/image.ts?src=https%3A%2F%2Fozksgdmyrqcxcwhnbepg.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fassets%2F2291%2Fb79dcfc0-45b8-40c4-a3ba-310e66995529&amp;fit=cover&amp;width=768&amp;height=454 768w
              " />
            <img
              sizes="(max-width: 640px) 100vw, 30vw"
              src="https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/2291/23be366c-fa07-4520-9338-387ce77acabb"
              alt="a"
              decoding="async"
              loading="lazy"
              class="w-full h-full object-cover" /></picture
          ><a
            href="/feminino"
            style="left: 12%; top: 59%"
            class="absolute w-min btn btn-accent rounded-full hover:rounded text-accent no-animation md:scale-[30%] hover:text-accent-content hover:scale-125 sm:hidden"
            ><span>Glasses</span></a
          ><a
            href="/feminino"
            style="left: 7%; top: 60%"
            class="absolute w-min btn btn-accent rounded-full hover:rounded text-accent no-animation md:scale-[30%] hover:text-accent-content hover:scale-125 hidden sm:inline-flex"
            ><span>Glasses</span></a
          ><a
            href="/feminino"
            style="left: 30%; top: 30%"
            class="absolute w-min btn btn-accent rounded-full hover:rounded text-accent no-animation md:scale-[30%] hover:text-accent-content hover:scale-125 sm:hidden"
            ><span>Bag</span></a
          ><a
            href="/feminino"
            style="left: 30%; top: 30%"
            class="absolute w-min btn btn-accent rounded-full hover:rounded text-accent no-animation md:scale-[30%] hover:text-accent-content hover:scale-125 hidden sm:inline-flex"
            ><span>Bag</span></a
          >
        </figure>
        <div
          class="flex flex-col justify-center gap-6 py-20 px-8 bg-neutral-content"
        >
          <h2 class="card-title flex justify-center">Awesome collection</h2>
          <p class="text-base-content text-center">Your description</p>
          <div class="card-actions justify-center">
            <a href="/feminino" class="underline">Explore collection</a>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section
    id="2253410618-0"
    data-manifest-key="site/sections/Category/CategoryGrid.tsx"
  >
    <div id="P0-1155371" class="container mt-16">
      <div class="flex flex-col gap-2 text-center">
        <h1
          class="text-2xl font-light leading-8 lg:leading-10 text-base-content lg:text-3xl"
        >
          Explore Our Categories
        </h1>
      </div>
      <div class="grid md:grid-cols-2 grid-cols-1 mt-6">
        <div>
          <a
            href="/"
            class="relative flex justify-start flex-col-reverse"
            data-current="true"
            aria-current="page"
            ><figure>
              <img
                src="https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/2291/01c01ba9-ac16-4371-82ca-b93d17545f9c"
                alt="Your Collection"
                width="720"
                height="480"
                loading="lazy"
                data-fresh-disable-lock="true"
                srcset="
                  /live/invoke/website/loaders/image.ts?src=https%3A%2F%2Fozksgdmyrqcxcwhnbepg.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fassets%2F2291%2F01c01ba9-ac16-4371-82ca-b93d17545f9c&amp;fit=cover&amp;width=720&amp;height=480   720w,
                  /live/invoke/website/loaders/image.ts?src=https%3A%2F%2Fozksgdmyrqcxcwhnbepg.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fassets%2F2291%2F01c01ba9-ac16-4371-82ca-b93d17545f9c&amp;fit=cover&amp;width=1440&amp;height=960 1440w
                "
                class="w-full"
              />
            </figure>
            <button
              aria-label="Your Collection"
              type="button"
              class="btn no-animation font-light text-base-content bg-base-100 py-4 px-6 absolute m-6"
            >
              Explore collection
            </button></a
          >
        </div>
        <div>
          <a
            href="/"
            class="relative flex justify-start flex-col-reverse"
            data-current="true"
            aria-current="page"
            ><figure>
              <img
                src="https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/2291/9b80d57d-64b0-4eef-a3cd-fa8daafaae9c"
                alt="Your Collection"
                width="720"
                height="480"
                loading="lazy"
                data-fresh-disable-lock="true"
                srcset="
                  /live/invoke/website/loaders/image.ts?src=https%3A%2F%2Fozksgdmyrqcxcwhnbepg.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fassets%2F2291%2F9b80d57d-64b0-4eef-a3cd-fa8daafaae9c&amp;fit=cover&amp;width=720&amp;height=480   720w,
                  /live/invoke/website/loaders/image.ts?src=https%3A%2F%2Fozksgdmyrqcxcwhnbepg.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fassets%2F2291%2F9b80d57d-64b0-4eef-a3cd-fa8daafaae9c&amp;fit=cover&amp;width=1440&amp;height=960 1440w
                "
                class="w-full"
              />
            </figure>
            <button
              aria-label="Your Collection"
              type="button"
              class="btn no-animation font-light text-base-content bg-base-100 py-4 px-6 absolute m-6"
            >
              Explore collection
            </button></a
          >
        </div>
        <div>
          <a
            href="/"
            class="relative flex justify-start flex-col-reverse"
            data-current="true"
            aria-current="page"
            ><figure>
              <img
                src="https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/2291/ed4c0eb3-96ab-484f-b293-e91d196a5063"
                alt="Your Collection"
                width="720"
                height="480"
                loading="lazy"
                data-fresh-disable-lock="true"
                srcset="
                  /live/invoke/website/loaders/image.ts?src=https%3A%2F%2Fozksgdmyrqcxcwhnbepg.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fassets%2F2291%2Fed4c0eb3-96ab-484f-b293-e91d196a5063&amp;fit=cover&amp;width=720&amp;height=480   720w,
                  /live/invoke/website/loaders/image.ts?src=https%3A%2F%2Fozksgdmyrqcxcwhnbepg.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fassets%2F2291%2Fed4c0eb3-96ab-484f-b293-e91d196a5063&amp;fit=cover&amp;width=1440&amp;height=960 1440w
                "
                class="w-full"
              />
            </figure>
            <button
              aria-label="Your Collection"
              type="button"
              class="btn no-animation font-light text-base-content bg-base-100 py-4 px-6 absolute m-6"
            >
              Explore collection
            </button></a
          >
        </div>
        <div>
          <a
            href="/"
            class="relative flex justify-start flex-col-reverse"
            data-current="true"
            aria-current="page"
            ><figure>
              <img
                src="https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/2291/b9882ff7-3dbc-43e4-9813-5cec23c012cd"
                alt="Your Collection"
                width="720"
                height="480"
                loading="lazy"
                data-fresh-disable-lock="true"
                srcset="
                  /live/invoke/website/loaders/image.ts?src=https%3A%2F%2Fozksgdmyrqcxcwhnbepg.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fassets%2F2291%2Fb9882ff7-3dbc-43e4-9813-5cec23c012cd&amp;fit=cover&amp;width=720&amp;height=480   720w,
                  /live/invoke/website/loaders/image.ts?src=https%3A%2F%2Fozksgdmyrqcxcwhnbepg.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fassets%2F2291%2Fb9882ff7-3dbc-43e4-9813-5cec23c012cd&amp;fit=cover&amp;width=1440&amp;height=960 1440w
                "
                class="w-full"
              />
            </figure>
            <button
              aria-label="Your Collection"
              type="button"
              class="btn no-animation font-light text-base-content bg-base-100 py-4 px-6 absolute m-6"
            >
              Explore collection
            </button></a
          >
        </div>
      </div>
    </div>
  </section>
  <section
    id="2301097154-0"
    data-manifest-key="site/sections/Product/ShelfWithImage.tsx"
  >
    <div class="container">
      <div class="grid md:grid-cols-2 grid-cols-1 bg-neutral-content">
        <div class="md:max-w-xs mx-auto flex items-center">
          <section
            id="3932226494-00"
            data-manifest-key="site/sections/Product/ProductShelf.tsx"
          >
            <button
              f-partial="/deco/render?props=%7B%7D&amp;href=https%3A%2F%2Fstorefront-vtex.deco.site%2F&amp;pathTemplate=%2F&amp;renderSalt=00&amp;framework=fresh&amp;resolveChain=%5B2%2C%22website%2Fhandlers%2Ffresh.ts%22%2C0%2C%22page%22%2C2%2C%22resolved%22%2C1%2C%22pages-home-c4bcbfb771e9%22%2C2%2C%22website%2Fpages%2FPage.tsx%22%2C0%2C%22sections%22%2C0%2C%228%22%2C2%2C%22site%2Fsections%2FProduct%2FShelfWithImage.tsx%22%2C0%2C%22section%22%5D&amp;fresh-partial=true&amp;partialMode=replace"
              f-client-nav="true"
              id="3932226494-00-partial-onload"
              style="display: none"
            ></button>
            <script
              defer=""
              src="data:text/javascript;base64,ZGVjb2RlVVJJQ29tcG9uZW50KGVzY2FwZSgoKChpZCk9PnsKICBmdW5jdGlvbiBpbml0KCkgewogICAgY29uc3QgZWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTsKICAgIGNvbnN0IHBhcmVudCA9IGVsZW0/LnBhcmVudEVsZW1lbnQ7CiAgICBpZiAoZWxlbSA9PSBudWxsIHx8IHBhcmVudCA9PSBudWxsKSB7CiAgICAgIGNvbnNvbGUuZXJyb3IoYE1pc3NpbmcgZWxlbWVudCBvZiBpZCAke2lkfSBvciBpdHMgcGFyZW50IGVsZW1lbnQuIEFzeW5jIHJlbmRlcmluZyB3aWxsIE5PVCB3b3JrIHByb3Blcmx5YCk7CiAgICAgIHJldHVybjsKICAgIH0KICAgIGNvbnN0IG9ic2VydmVBbmRDbG9zZSA9IChlKT0+ewogICAgICBlLmZvckVhY2goKGVudHJ5KT0+ewogICAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZykgewogICAgICAgICAgZWxlbS5jbGljaygpOwogICAgICAgICAgb2JzZXJ2ZXIuZGlzY29ubmVjdCgpOwogICAgICAgIH0KICAgICAgfSk7CiAgICB9OwogICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIob2JzZXJ2ZUFuZENsb3NlKTsKICAgIG9ic2VydmVyLm9ic2VydmUocGFyZW50KTsKICAgIG9ic2VydmVBbmRDbG9zZShvYnNlcnZlci50YWtlUmVjb3JkcygpKTsKICB9CiAgaWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgPT09ICJjb21wbGV0ZSIpIHsKICAgIGluaXQoKTsKICB9IGVsc2UgewogICAgYWRkRXZlbnRMaXN0ZW5lcigibG9hZCIsIGluaXQpOwogIH0KfSkoIjM5MzIyMjY0OTQtMDAtcGFydGlhbC1vbmxvYWQiKSkpKQ=="
              nonce=""
            ></script>
            <div
              style="height: 716px"
              class="flex justify-center items-center"
            >
              <span class="loading loading-spinner"></span>
            </div>
          </section>
        </div>
        <a href="/feminino"
          ><img
            src="https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/2291/165c770b-cbbc-48c0-81ad-c732d527c77c"
            width="720"
            height="640"
            alt="Collection Image"
            data-fresh-disable-lock="true"
            srcset="
              /live/invoke/website/loaders/image.ts?src=https%3A%2F%2Fozksgdmyrqcxcwhnbepg.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fassets%2F2291%2F165c770b-cbbc-48c0-81ad-c732d527c77c&amp;fit=cover&amp;width=720&amp;height=640    720w,
              /live/invoke/website/loaders/image.ts?src=https%3A%2F%2Fozksgdmyrqcxcwhnbepg.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fassets%2F2291%2F165c770b-cbbc-48c0-81ad-c732d527c77c&amp;fit=cover&amp;width=1440&amp;height=1280 1440w
            "
            loading="lazy"
            class="w-full h-full object-cover"
        /></a>
      </div>
    </div>
  </section>
  <section
    id="313484949-0"
    data-manifest-key="site/sections/Product/ProductShelfTabbed.tsx"
  >
    <button
      f-partial="/deco/render?props=%7B%7D&amp;href=https%3A%2F%2Fstorefront-vtex.deco.site%2F&amp;pathTemplate=%2F&amp;renderSalt=0&amp;framework=fresh&amp;resolveChain=%5B2%2C%22website%2Fhandlers%2Ffresh.ts%22%2C0%2C%22page%22%2C2%2C%22resolved%22%2C1%2C%22pages-home-c4bcbfb771e9%22%2C2%2C%22website%2Fpages%2FPage.tsx%22%2C0%2C%22sections%22%2C0%2C%229%22%5D&amp;fresh-partial=true&amp;partialMode=replace"
      f-client-nav="true"
      id="313484949-0-partial-onload"
      style="display: none"
    ></button>
    <script
      defer=""
      src="data:text/javascript;base64,ZGVjb2RlVVJJQ29tcG9uZW50KGVzY2FwZSgoKChpZCk9PnsKICBmdW5jdGlvbiBpbml0KCkgewogICAgY29uc3QgZWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTsKICAgIGNvbnN0IHBhcmVudCA9IGVsZW0/LnBhcmVudEVsZW1lbnQ7CiAgICBpZiAoZWxlbSA9PSBudWxsIHx8IHBhcmVudCA9PSBudWxsKSB7CiAgICAgIGNvbnNvbGUuZXJyb3IoYE1pc3NpbmcgZWxlbWVudCBvZiBpZCAke2lkfSBvciBpdHMgcGFyZW50IGVsZW1lbnQuIEFzeW5jIHJlbmRlcmluZyB3aWxsIE5PVCB3b3JrIHByb3Blcmx5YCk7CiAgICAgIHJldHVybjsKICAgIH0KICAgIGNvbnN0IG9ic2VydmVBbmRDbG9zZSA9IChlKT0+ewogICAgICBlLmZvckVhY2goKGVudHJ5KT0+ewogICAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZykgewogICAgICAgICAgZWxlbS5jbGljaygpOwogICAgICAgICAgb2JzZXJ2ZXIuZGlzY29ubmVjdCgpOwogICAgICAgIH0KICAgICAgfSk7CiAgICB9OwogICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIob2JzZXJ2ZUFuZENsb3NlKTsKICAgIG9ic2VydmVyLm9ic2VydmUocGFyZW50KTsKICAgIG9ic2VydmVBbmRDbG9zZShvYnNlcnZlci50YWtlUmVjb3JkcygpKTsKICB9CiAgaWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgPT09ICJjb21wbGV0ZSIpIHsKICAgIGluaXQoKTsKICB9IGVsc2UgewogICAgYWRkRXZlbnRMaXN0ZW5lcigibG9hZCIsIGluaXQpOwogIH0KfSkoIjMxMzQ4NDk0OS0wLXBhcnRpYWwtb25sb2FkIikpKSk="
      nonce=""
    ></script>
    <div style="height: 716px" class="flex justify-center items-center">
      <span class="loading loading-spinner"></span>
    </div>
  </section>
  <section
    id="4108410152-0"
    data-manifest-key="site/sections/Content/BlogPosts.tsx"
  >
    <div class="w-full container py-8 flex flex-col gap-6 pb-16">
      <div class="px-9">
        <div class="flex flex-col gap-2 text-center">
          <h1
            class="text-2xl font-light leading-8 lg:leading-10 text-base-content lg:text-3xl"
          >
            Blogposts
          </h1>
        </div>
      </div>
      <div id="P0-1495499" class="grid px-6 container">
        <ul
          data-slider="true"
          class="carousel carousel-center sm:carousel-end row-start-2 row-end-5"
        >
          <li data-slider-item="0" class="carousel-item md:w-1/3 w-full">
            <a
              href="/"
              class="block px-3"
              data-current="true"
              aria-current="page"
              ><article class="flex flex-col">
                <figure class="w-full">
                  <img
                    src="https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/2291/7e80b083-d1ff-480d-b3a3-b744b69402b1"
                    alt="Item of the Summer"
                    width="442"
                    height="266"
                    data-fresh-disable-lock="true"
                    srcset="
                      /live/invoke/website/loaders/image.ts?src=https%3A%2F%2Fozksgdmyrqcxcwhnbepg.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fassets%2F2291%2F7e80b083-d1ff-480d-b3a3-b744b69402b1&amp;fit=cover&amp;width=442&amp;height=266 442w,
                      /live/invoke/website/loaders/image.ts?src=https%3A%2F%2Fozksgdmyrqcxcwhnbepg.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fassets%2F2291%2F7e80b083-d1ff-480d-b3a3-b744b69402b1&amp;fit=cover&amp;width=884&amp;height=532 884w
                    "
                    loading="lazy"
                    class="w-full object-cover"
                  />
                  <figcaption class="text-2xl mt-4 font-light">
                    Item of the Summer
                  </figcaption>
                </figure>
                <div class="flex flex-col gap-1">
                  <p class="text-base font-light pb-14 pt-2">
                    Lorem ipsum dolor sit amet consectetur. Condimentum dolor
                    ultrices commodo et. Blandit vel est sodales tincidunt
                    aliquam tincidunt.
                  </p>
                  <div class="flex items-center justify-between">
                    <p class="font-light text-xs">deco.cx</p>
                    <p class="font-light text-xs">January 15, 2024</p>
                  </div>
                </div>
              </article></a
            >
          </li>
          <li data-slider-item="1" class="carousel-item md:w-1/3 w-full">
            <a
              href="/"
              class="block px-3"
              data-current="true"
              aria-current="page"
              ><article class="flex flex-col">
                <figure class="w-full">
                  <img
                    src="https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/2291/a3f329d8-795c-4c3b-8049-ede939d599ef"
                    alt="Item of the Summer"
                    width="442"
                    height="266"
                    data-fresh-disable-lock="true"
                    srcset="
                      /live/invoke/website/loaders/image.ts?src=https%3A%2F%2Fozksgdmyrqcxcwhnbepg.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fassets%2F2291%2Fa3f329d8-795c-4c3b-8049-ede939d599ef&amp;fit=cover&amp;width=442&amp;height=266 442w,
                      /live/invoke/website/loaders/image.ts?src=https%3A%2F%2Fozksgdmyrqcxcwhnbepg.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fassets%2F2291%2Fa3f329d8-795c-4c3b-8049-ede939d599ef&amp;fit=cover&amp;width=884&amp;height=532 884w
                    "
                    loading="lazy"
                    class="w-full object-cover"
                  />
                  <figcaption class="text-2xl mt-4 font-light">
                    Item of the Summer
                  </figcaption>
                </figure>
                <div class="flex flex-col gap-1">
                  <p class="text-base font-light pb-14 pt-2">
                    Lorem ipsum dolor sit amet consectetur. Condimentum dolor
                    ultrices commodo et. Blandit vel est sodales tincidunt
                    aliquam tincidunt.
                  </p>
                  <div class="flex items-center justify-between">
                    <p class="font-light text-xs">deco.cx</p>
                    <p class="font-light text-xs">January 15, 2024</p>
                  </div>
                </div>
              </article></a
            >
          </li>
          <li data-slider-item="2" class="carousel-item md:w-1/3 w-full">
            <a
              href="/"
              class="block px-3"
              data-current="true"
              aria-current="page"
              ><article class="flex flex-col">
                <figure class="w-full">
                  <img
                    src="https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/2291/7e80b083-d1ff-480d-b3a3-b744b69402b1"
                    alt="Item of the Summer"
                    width="442"
                    height="266"
                    data-fresh-disable-lock="true"
                    srcset="
                      /live/invoke/website/loaders/image.ts?src=https%3A%2F%2Fozksgdmyrqcxcwhnbepg.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fassets%2F2291%2F7e80b083-d1ff-480d-b3a3-b744b69402b1&amp;fit=cover&amp;width=442&amp;height=266 442w,
                      /live/invoke/website/loaders/image.ts?src=https%3A%2F%2Fozksgdmyrqcxcwhnbepg.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fassets%2F2291%2F7e80b083-d1ff-480d-b3a3-b744b69402b1&amp;fit=cover&amp;width=884&amp;height=532 884w
                    "
                    loading="lazy"
                    class="w-full object-cover"
                  />
                  <figcaption class="text-2xl mt-4 font-light">
                    Item of the Summer
                  </figcaption>
                </figure>
                <div class="flex flex-col gap-1">
                  <p class="text-base font-light pb-14 pt-2">
                    Lorem ipsum dolor sit amet consectetur. Condimentum dolor
                    ultrices commodo et. Blandit vel est sodales tincidunt
                    aliquam tincidunt.
                  </p>
                  <div class="flex items-center justify-between">
                    <p class="font-light text-xs">deco.cx</p>
                    <p class="font-light text-xs">January 15, 2024</p>
                  </div>
                </div>
              </article></a
            >
          </li>
        </ul>
        <script
          src="data:text/javascript;base64,ZGVjb2RlVVJJQ29tcG9uZW50KGVzY2FwZSgoKHsgcm9vdElkLCBzY3JvbGwsIGludGVydmFsLCBpbmZpbml0ZSB9KT0+ewogIGNvbnN0IEFUVFJJQlVURVMgPSB7CiAgICAiZGF0YS1zbGlkZXIiOiAiZGF0YS1zbGlkZXIiLAogICAgImRhdGEtc2xpZGVyLWl0ZW0iOiAiZGF0YS1zbGlkZXItaXRlbSIsCiAgICAnZGF0YS1zbGlkZT0icHJldiInOiAnZGF0YS1zbGlkZT0icHJldiInLAogICAgJ2RhdGEtc2xpZGU9Im5leHQiJzogJ2RhdGEtc2xpZGU9Im5leHQiJywKICAgICJkYXRhLWRvdCI6ICJkYXRhLWRvdCIKICB9OwogIC8vIFBlcmNlbnRhZ2Ugb2YgdGhlIGl0ZW0gdGhhdCBoYXMgdG8gYmUgaW5zaWRlIHRoZSBjb250YWluZXIKICAvLyBmb3IgaXQgaXQgYmUgY29uc2lkZXJlZCBhcyBpbnNpZGUgdGhlIGNvbnRhaW5lcgogIGNvbnN0IFRIUkVTSE9MRCA9IDAuNjsKICBjb25zdCBpbnRlcnNlY3Rpb25YID0gKGVsZW1lbnQsIGNvbnRhaW5lcik9PnsKICAgIGNvbnN0IGRlbHRhID0gY29udGFpbmVyLndpZHRoIC8gMV8wMDA7CiAgICBpZiAoZWxlbWVudC5yaWdodCA8IGNvbnRhaW5lci5sZWZ0IC0gZGVsdGEpIHsKICAgICAgcmV0dXJuIDAuMDsKICAgIH0KICAgIGlmIChlbGVtZW50LmxlZnQgPiBjb250YWluZXIucmlnaHQgKyBkZWx0YSkgewogICAgICByZXR1cm4gMC4wOwogICAgfQogICAgaWYgKGVsZW1lbnQubGVmdCA8IGNvbnRhaW5lci5sZWZ0IC0gZGVsdGEpIHsKICAgICAgcmV0dXJuIGVsZW1lbnQucmlnaHQgLSBjb250YWluZXIubGVmdCArIGRlbHRhOwogICAgfQogICAgaWYgKGVsZW1lbnQucmlnaHQgPiBjb250YWluZXIucmlnaHQgKyBkZWx0YSkgewogICAgICByZXR1cm4gY29udGFpbmVyLnJpZ2h0IC0gZWxlbWVudC5sZWZ0ICsgZGVsdGE7CiAgICB9CiAgICByZXR1cm4gZWxlbWVudC53aWR0aDsKICB9OwogIC8vIGFzIGFueSBhcmUgb2sgaW4gdHlwZWd1YXJkIGZ1bmN0aW9ucwogIGNvbnN0IGlzSFRNTEVsZW1lbnQgPSAoeCk9Pi8vIGRlbm8tbGludC1pZ25vcmUgbm8tZXhwbGljaXQtYW55CiAgICB0eXBlb2YgeC5vZmZzZXRMZWZ0ID09PSAibnVtYmVyIjsKICBjb25zdCByb290ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocm9vdElkKTsKICBjb25zdCBzbGlkZXIgPSByb290Py5xdWVyeVNlbGVjdG9yKGBbJHtBVFRSSUJVVEVTWyJkYXRhLXNsaWRlciJdfV1gKTsKICBjb25zdCBpdGVtcyA9IHJvb3Q/LnF1ZXJ5U2VsZWN0b3JBbGwoYFske0FUVFJJQlVURVNbImRhdGEtc2xpZGVyLWl0ZW0iXX1dYCk7CiAgY29uc3QgcHJldiA9IHJvb3Q/LnF1ZXJ5U2VsZWN0b3IoYFske0FUVFJJQlVURVNbJ2RhdGEtc2xpZGU9InByZXYiJ119XWApOwogIGNvbnN0IG5leHQgPSByb290Py5xdWVyeVNlbGVjdG9yKGBbJHtBVFRSSUJVVEVTWydkYXRhLXNsaWRlPSJuZXh0IiddfV1gKTsKICBjb25zdCBkb3RzID0gcm9vdD8ucXVlcnlTZWxlY3RvckFsbChgWyR7QVRUUklCVVRFU1siZGF0YS1kb3QiXX1dYCk7CiAgaWYgKCFyb290IHx8ICFzbGlkZXIgfHwgIWl0ZW1zIHx8IGl0ZW1zLmxlbmd0aCA9PT0gMCkgewogICAgY29uc29sZS53YXJuKCJNaXNzaW5nIG5lY2Vzc2FyeSBzbGlkZXIgYXR0cmlidXRlcy4gSXQgd2lsbCBub3Qgd29yayBhcyBpbnRlbmRlZC4gTmVjZXNzYXJ5IGVsZW1lbnRzOiIsIHsKICAgICAgcm9vdCwKICAgICAgc2xpZGVyLAogICAgICBpdGVtcywKICAgICAgcm9vdElkCiAgICB9KTsKICAgIHJldHVybjsKICB9CiAgY29uc3QgZ2V0RWxlbWVudHNJbnNpZGVDb250YWluZXIgPSAoKT0+ewogICAgY29uc3QgaW5kaWNlcyA9IFtdOwogICAgY29uc3Qgc2xpZGVyUmVjdCA9IHNsaWRlci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTsKICAgIGZvcihsZXQgaW5kZXggPSAwOyBpbmRleCA8IGl0ZW1zLmxlbmd0aDsgaW5kZXgrKyl7CiAgICAgIGNvbnN0IGl0ZW0gPSBpdGVtcy5pdGVtKGluZGV4KTsKICAgICAgY29uc3QgcmVjdCA9IGl0ZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7CiAgICAgIGNvbnN0IHJhdGlvID0gaW50ZXJzZWN0aW9uWChyZWN0LCBzbGlkZXJSZWN0KSAvIHJlY3Qud2lkdGg7CiAgICAgIGlmIChyYXRpbyA+IFRIUkVTSE9MRCkgewogICAgICAgIGluZGljZXMucHVzaChpbmRleCk7CiAgICAgIH0KICAgIH0KICAgIHJldHVybiBpbmRpY2VzOwogIH07CiAgY29uc3QgZ29Ub0l0ZW0gPSAoaW5kZXgpPT57CiAgICBjb25zdCBpdGVtID0gaXRlbXMuaXRlbShpbmRleCk7CiAgICBpZiAoIWlzSFRNTEVsZW1lbnQoaXRlbSkpIHsKICAgICAgY29uc29sZS53YXJuKGBFbGVtZW50IGF0IGluZGV4ICR7aW5kZXh9IGlzIG5vdCBhbiBodG1sIGVsZW1lbnQuIFNraXBwaW5nIGNhcm91c2VsYCk7CiAgICAgIHJldHVybjsKICAgIH0KICAgIHNsaWRlci5zY3JvbGxUbyh7CiAgICAgIHRvcDogMCwKICAgICAgYmVoYXZpb3I6IHNjcm9sbCwKICAgICAgbGVmdDogaXRlbS5vZmZzZXRMZWZ0IC0gcm9vdC5vZmZzZXRMZWZ0CiAgICB9KTsKICB9OwogIGNvbnN0IG9uQ2xpY2tQcmV2ID0gKCk9PnsKICAgIGNvbnN0IGluZGljZXMgPSBnZXRFbGVtZW50c0luc2lkZUNvbnRhaW5lcigpOwogICAgLy8gV293ISBpdGVtcyBwZXIgcGFnZSBpcyBob3cgbWFueSBlbGVtZW50cyBhcmUgYmVpbmcgZGlzcGxheWVkIGluc2lkZSB0aGUgY29udGFpbmVyISEKICAgIGNvbnN0IGl0ZW1zUGVyUGFnZSA9IGluZGljZXMubGVuZ3RoOwogICAgY29uc3QgaXNTaG93aW5nRmlyc3QgPSBpbmRpY2VzWzBdID09PSAwOwogICAgY29uc3QgcGFnZUluZGV4ID0gTWF0aC5mbG9vcihpbmRpY2VzW2luZGljZXMubGVuZ3RoIC0gMV0gLyBpdGVtc1BlclBhZ2UpOwogICAgZ29Ub0l0ZW0oaXNTaG93aW5nRmlyc3QgPyBpdGVtcy5sZW5ndGggLSAxIDogKHBhZ2VJbmRleCAtIDEpICogaXRlbXNQZXJQYWdlKTsKICB9OwogIGNvbnN0IG9uQ2xpY2tOZXh0ID0gKCk9PnsKICAgIGNvbnN0IGluZGljZXMgPSBnZXRFbGVtZW50c0luc2lkZUNvbnRhaW5lcigpOwogICAgLy8gV293ISBpdGVtcyBwZXIgcGFnZSBpcyBob3cgbWFueSBlbGVtZW50cyBhcmUgYmVpbmcgZGlzcGxheWVkIGluc2lkZSB0aGUgY29udGFpbmVyISEKICAgIGNvbnN0IGl0ZW1zUGVyUGFnZSA9IGluZGljZXMubGVuZ3RoOwogICAgY29uc3QgaXNTaG93aW5nTGFzdCA9IGluZGljZXNbaW5kaWNlcy5sZW5ndGggLSAxXSA9PT0gaXRlbXMubGVuZ3RoIC0gMTsKICAgIGNvbnN0IHBhZ2VJbmRleCA9IE1hdGguZmxvb3IoaW5kaWNlc1swXSAvIGl0ZW1zUGVyUGFnZSk7CiAgICBnb1RvSXRlbShpc1Nob3dpbmdMYXN0ID8gMCA6IChwYWdlSW5kZXggKyAxKSAqIGl0ZW1zUGVyUGFnZSk7CiAgfTsKICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZWxlbWVudHMpPT5lbGVtZW50cy5mb3JFYWNoKChpdGVtKT0+ewogICAgICBjb25zdCBpbmRleCA9IE51bWJlcihpdGVtLnRhcmdldC5nZXRBdHRyaWJ1dGUoImRhdGEtc2xpZGVyLWl0ZW0iKSkgfHwgMDsKICAgICAgY29uc3QgZG90ID0gZG90cz8uaXRlbShpbmRleCk7CiAgICAgIGlmIChpdGVtLmlzSW50ZXJzZWN0aW5nKSB7CiAgICAgICAgZG90Py5zZXRBdHRyaWJ1dGUoImRpc2FibGVkIiwgIiIpOwogICAgICB9IGVsc2UgewogICAgICAgIGRvdD8ucmVtb3ZlQXR0cmlidXRlKCJkaXNhYmxlZCIpOwogICAgICB9CiAgICAgIGlmICghaW5maW5pdGUpIHsKICAgICAgICBpZiAoaW5kZXggPT09IDApIHsKICAgICAgICAgIGlmIChpdGVtLmlzSW50ZXJzZWN0aW5nKSB7CiAgICAgICAgICAgIHByZXY/LnNldEF0dHJpYnV0ZSgiZGlzYWJsZWQiLCAiIik7CiAgICAgICAgICB9IGVsc2UgewogICAgICAgICAgICBwcmV2Py5yZW1vdmVBdHRyaWJ1dGUoImRpc2FibGVkIik7CiAgICAgICAgICB9CiAgICAgICAgfQogICAgICAgIGlmIChpbmRleCA9PT0gaXRlbXMubGVuZ3RoIC0gMSkgewogICAgICAgICAgaWYgKGl0ZW0uaXNJbnRlcnNlY3RpbmcpIHsKICAgICAgICAgICAgbmV4dD8uc2V0QXR0cmlidXRlKCJkaXNhYmxlZCIsICIiKTsKICAgICAgICAgIH0gZWxzZSB7CiAgICAgICAgICAgIG5leHQ/LnJlbW92ZUF0dHJpYnV0ZSgiZGlzYWJsZWQiKTsKICAgICAgICAgIH0KICAgICAgICB9CiAgICAgIH0KICAgIH0pLCB7CiAgICB0aHJlc2hvbGQ6IFRIUkVTSE9MRCwKICAgIHJvb3Q6IHNsaWRlcgogIH0pOwogIGl0ZW1zLmZvckVhY2goKGl0ZW0pPT5vYnNlcnZlci5vYnNlcnZlKGl0ZW0pKTsKICBmb3IobGV0IGl0ID0gMDsgaXQgPCAoZG90cz8ubGVuZ3RoID8/IDApOyBpdCsrKXsKICAgIGRvdHM/Lml0ZW0oaXQpLmFkZEV2ZW50TGlzdGVuZXIoImNsaWNrIiwgKCk9PmdvVG9JdGVtKGl0KSk7CiAgfQogIHByZXY/LmFkZEV2ZW50TGlzdGVuZXIoImNsaWNrIiwgb25DbGlja1ByZXYpOwogIG5leHQ/LmFkZEV2ZW50TGlzdGVuZXIoImNsaWNrIiwgb25DbGlja05leHQpOwogIGNvbnN0IHRpbWVvdXQgPSBpbnRlcnZhbCAmJiBzZXRJbnRlcnZhbChvbkNsaWNrTmV4dCwgaW50ZXJ2YWwpOwogIC8vIFVucmVnaXN0ZXIgY2FsbGJhY2tzCiAgcmV0dXJuICgpPT57CiAgICBmb3IobGV0IGl0ID0gMDsgaXQgPCAoZG90cz8ubGVuZ3RoID8/IDApOyBpdCsrKXsKICAgICAgZG90cz8uaXRlbShpdCkucmVtb3ZlRXZlbnRMaXN0ZW5lcigiY2xpY2siLCAoKT0+Z29Ub0l0ZW0oaXQpKTsKICAgIH0KICAgIHByZXY/LnJlbW92ZUV2ZW50TGlzdGVuZXIoImNsaWNrIiwgb25DbGlja1ByZXYpOwogICAgbmV4dD8ucmVtb3ZlRXZlbnRMaXN0ZW5lcigiY2xpY2siLCBvbkNsaWNrTmV4dCk7CiAgICBvYnNlcnZlci5kaXNjb25uZWN0KCk7CiAgICBjbGVhckludGVydmFsKHRpbWVvdXQpOwogIH07Cn0pKHsicm9vdElkIjoiUDAtMTQ5NTQ5OSIsInNjcm9sbCI6InNtb290aCIsImluZmluaXRlIjpmYWxzZX0pKSk="
          defer=""
          nonce=""
        ></script>
      </div>
    </div>
  </section>
  <section
    id="497052512-0"
    data-manifest-key="site/sections/Footer/Footer.tsx"
  >
    <footer
      class="w-full flex flex-col pt-10 pb-2 md:pb-10 gap-10 bg-base-100 text-base-content"
    >
      <div class="lg:container mx-6 lg:mx-auto">
        <div class="flex flex-col gap-10">
          <div
            class="flex flex-col gap-4 lg:flex-row lg:w-full lg:justify-between"
          >
            <div class="flex flex-col gap-4">
              <h4 class="text-2xl lg:text-3xl">Assine nossa newsletter</h4>
              <div>Participe e ganhe 10% de desconto na primeira compra</div>
            </div>
            <div class="flex flex-col gap-4">
              <form class="form-control">
                <div class="flex flex-wrap gap-3">
                  <input
                    name="email"
                    placeholder="Digite seu email"
                    class="flex-auto md:flex-none input input-bordered md:w-80 text-base-content"
                  /><button type="submit" class="btn disabled:loading">
                    Inscrever
                  </button>
                </div>
              </form>
              <div class="text-sm">
                <p>
                  Ao se inscrever, você está aceitando nossa
                  <a href="/" class="link">Política de Privacidade</a>.
                </p>
              </div>
            </div>
          </div>
          <div class="w-full flex"><div class="w-full border-b"></div></div>
          <div
            class="flex flex-col lg:flex-row gap-10 lg:gap-20 lg:justify-between"
          >
            <ul class="hidden md:flex flex-row gap-6 lg:gap-10 false">
              <li>
                <div class="flex flex-col gap-2">
                  <span class="font-medium text-lg">Sobre</span>
                  <ul class="flex flex-col gap-2 flex-wrap text-sm">
                    <li>
                      <a href="/quem-somos" class="block py-1 link link-hover"
                        >Quem somos</a
                      >
                    </li>
                    <li>
                      <a
                        href="/privacidade"
                        class="block py-1 link link-hover"
                        >Privacidade e segurança</a
                      >
                    </li>
                    <li>
                      <a
                        href="/termos-de-uso"
                        class="block py-1 link link-hover"
                        >Termos de uso</a
                      >
                    </li>
                    <li>
                      <a
                        href="/trabalhe-conosco"
                        class="block py-1 link link-hover"
                        >Trabalhe conosco</a
                      >
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <div class="flex flex-col gap-2">
                  <span class="font-medium text-lg">Atendimento</span>
                  <ul class="flex flex-col gap-2 flex-wrap text-sm">
                    <li>
                      <a
                        href="/central-de-atendimento"
                        class="block py-1 link link-hover"
                        >Central de atendimento</a
                      >
                    </li>
                    <li>
                      <a
                        href="/fale-whatsapp"
                        class="block py-1 link link-hover"
                        >Fale conosco pelo Whatsapp</a
                      >
                    </li>
                    <li>
                      <a
                        href="/troca-e-devolucao"
                        class="block py-1 link link-hover"
                        >Troca e devolução</a
                      >
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <div class="flex flex-col gap-2">
                  <span class="font-medium text-lg">Minha conta</span>
                  <ul class="flex flex-col gap-2 flex-wrap text-sm">
                    <li>
                      <a href="/login" class="block py-1 link link-hover"
                        >Login e cadastro</a
                      >
                    </li>
                    <li>
                      <a
                        href="/meus-pedidos"
                        class="block py-1 link link-hover"
                        >Meus pedidos</a
                      >
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
            <ul class="flex flex-col md:hidden gap-4">
              <li>
                <div class="collapse collapse-arrow">
                  <input id="Sobre" type="checkbox" class="min-h-[0]" /><label
                    for="Sobre"
                    class="collapse-title min-h-[0] !p-0 flex gap-2"
                    ><span>Sobre</span></label
                  >
                  <div class="collapse-content">
                    <ul class="flex flex-col gap-1 pl-5 pt-2">
                      <li>
                        <a
                          href="/quem-somos"
                          class="block py-1 link link-hover"
                          >Quem somos</a
                        >
                      </li>
                      <li>
                        <a
                          href="/privacidade"
                          class="block py-1 link link-hover"
                          >Privacidade e segurança</a
                        >
                      </li>
                      <li>
                        <a
                          href="/termos-de-uso"
                          class="block py-1 link link-hover"
                          >Termos de uso</a
                        >
                      </li>
                      <li>
                        <a
                          href="/trabalhe-conosco"
                          class="block py-1 link link-hover"
                          >Trabalhe conosco</a
                        >
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li>
                <div class="collapse collapse-arrow">
                  <input
                    id="Atendimento"
                    type="checkbox"
                    class="min-h-[0]"
                  /><label
                    for="Atendimento"
                    class="collapse-title min-h-[0] !p-0 flex gap-2"
                    ><span>Atendimento</span></label
                  >
                  <div class="collapse-content">
                    <ul class="flex flex-col gap-1 pl-5 pt-2">
                      <li>
                        <a
                          href="/central-de-atendimento"
                          class="block py-1 link link-hover"
                          >Central de atendimento</a
                        >
                      </li>
                      <li>
                        <a
                          href="/fale-whatsapp"
                          class="block py-1 link link-hover"
                          >Fale conosco pelo Whatsapp</a
                        >
                      </li>
                      <li>
                        <a
                          href="/troca-e-devolucao"
                          class="block py-1 link link-hover"
                          >Troca e devolução</a
                        >
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li>
                <div class="collapse collapse-arrow">
                  <input
                    id="Minha conta"
                    type="checkbox"
                    class="min-h-[0]"
                  /><label
                    for="Minha conta"
                    class="collapse-title min-h-[0] !p-0 flex gap-2"
                    ><span>Minha conta</span></label
                  >
                  <div class="collapse-content">
                    <ul class="flex flex-col gap-1 pl-5 pt-2">
                      <li>
                        <a href="/login" class="block py-1 link link-hover"
                          >Login e cadastro</a
                        >
                      </li>
                      <li>
                        <a
                          href="/meus-pedidos"
                          class="block py-1 link link-hover"
                          >Meus pedidos</a
                        >
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
            <div
              class="flex flex-col md:flex-row lg:flex-col gap-10 lg:gap-10 lg:w-2/5 lg:pl-10"
            >
              <div class="flex flex-col md:flex-row gap-10 lg:gap-20">
                <div class="lg:flex-auto">
                  <div class="flex flex-col gap-4">
                    <h3 class="text-lg">Formas de pagamento</h3>
                    <ul class="flex items-center gap-4 flex-wrap">
                      <li title="Elo" class="border">
                        <svg width="48" height="32" stroke-width="1">
                          <use
                            href="/sprites.svg?__frsh_c=23d7a5fd9627e01d1ed21d67f4a41eeb2440812a#Elo"
                          ></use>
                        </svg>
                      </li>
                      <li title="Mastercard" class="border">
                        <svg width="48" height="32" stroke-width="1">
                          <use
                            href="/sprites.svg?__frsh_c=23d7a5fd9627e01d1ed21d67f4a41eeb2440812a#Mastercard"
                          ></use>
                        </svg>
                      </li>
                      <li title="Pix" class="border">
                        <svg width="48" height="32" stroke-width="1">
                          <use
                            href="/sprites.svg?__frsh_c=23d7a5fd9627e01d1ed21d67f4a41eeb2440812a#Pix"
                          ></use>
                        </svg>
                      </li>
                      <li title="Visa" class="border">
                        <svg width="48" height="32" stroke-width="1">
                          <use
                            href="/sprites.svg?__frsh_c=23d7a5fd9627e01d1ed21d67f4a41eeb2440812a#Visa"
                          ></use>
                        </svg>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="lg:flex-auto">
                  <div class="flex flex-col gap-4">
                    <h3 class="text-lg">Siga-nos nas redes</h3>
                    <ul class="flex gap-4 flex-wrap items-center">
                      <li>
                        <a
                          href="http://deco.cx/"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Discord Logo"
                          class="flex gap-2 items-center"
                          ><span class="block p-1 border rounded-full"
                            ><svg width="24" height="24" stroke-width="16">
                              <use
                                href="/sprites.svg?__frsh_c=23d7a5fd9627e01d1ed21d67f4a41eeb2440812a#Discord"
                              ></use></svg></span
                        ></a>
                      </li>
                      <li>
                        <a
                          href="http://deco.cx/"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Facebook Logo"
                          class="flex gap-2 items-center"
                          ><span class="block p-1 border rounded-full"
                            ><svg width="24" height="24" stroke-width="16">
                              <use
                                href="/sprites.svg?__frsh_c=23d7a5fd9627e01d1ed21d67f4a41eeb2440812a#Facebook"
                              ></use></svg></span
                        ></a>
                      </li>
                      <li>
                        <a
                          href="http://deco.cx/"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Instagram Logo"
                          class="flex gap-2 items-center"
                          ><span class="block p-1 border rounded-full"
                            ><svg width="24" height="24" stroke-width="16">
                              <use
                                href="/sprites.svg?__frsh_c=23d7a5fd9627e01d1ed21d67f4a41eeb2440812a#Instagram"
                              ></use></svg></span
                        ></a>
                      </li>
                      <li>
                        <a
                          href="http://deco.cx/"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Linkedin Logo"
                          class="flex gap-2 items-center"
                          ><span class="block p-1 border rounded-full"
                            ><svg width="24" height="24" stroke-width="16">
                              <use
                                href="/sprites.svg?__frsh_c=23d7a5fd9627e01d1ed21d67f4a41eeb2440812a#Linkedin"
                              ></use></svg></span
                        ></a>
                      </li>
                      <li>
                        <a
                          href="http://deco.cx/"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Tiktok Logo"
                          class="flex gap-2 items-center"
                          ><span class="block p-1 border rounded-full"
                            ><svg width="24" height="24" stroke-width="16">
                              <use
                                href="/sprites.svg?__frsh_c=23d7a5fd9627e01d1ed21d67f4a41eeb2440812a#Tiktok"
                              ></use></svg></span
                        ></a>
                      </li>
                      <li>
                        <a
                          href="http://deco.cx/"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Twitter Logo"
                          class="flex gap-2 items-center"
                          ><span class="block p-1 border rounded-full"
                            ><svg width="24" height="24" stroke-width="16">
                              <use
                                href="/sprites.svg?__frsh_c=23d7a5fd9627e01d1ed21d67f4a41eeb2440812a#Twitter"
                              ></use></svg></span
                        ></a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="flex flex-col gap-10 lg:gap-10">
                <div class="flex flex-wrap gap-4 text-base-content">
                  <label for="currency" class="sr-only">Currency</label
                  ><select
                    id="currency"
                    class="select select-bordered select-sm h-10"
                  >
                    <option>Brasil BRL</option>
                    <option>United Stated USD</option></select
                  ><label for="language" class="sr-only">Language</label
                  ><select
                    id="language"
                    class="select select-bordered select-sm h-10"
                  >
                    <option>PT</option>
                    <option>EN</option>
                  </select>
                </div>
                <div class="flex gap-2 lg:flex-wrap">
                  <a
                    href="http://www.google.com"
                    target="_blank"
                    aria-label="Download on the App Store at link http://www.google.com"
                    ><img
                      loading="lazy"
                      width="135"
                      height="40"
                      src="/image/app-apple.png?__frsh_c=23d7a5fd9627e01d1ed21d67f4a41eeb2440812a"
                      alt="Download on the App Store" /></a
                  ><a
                    href="http://www.google.com"
                    target="_blank"
                    aria-label="Get it on Google Play at link http://www.google.com"
                    ><img
                      loading="lazy"
                      width="135"
                      height="40"
                      src="/image/app-android.png?__frsh_c=23d7a5fd9627e01d1ed21d67f4a41eeb2440812a"
                      alt="Get it on Google Play"
                  /></a>
                </div>
              </div>
            </div>
          </div>
          <div class="w-full flex"><div class="w-full border-b"></div></div>
          <div
            class="flex flex-col md:flex-row md:justify-between gap-10 md:items-center"
          >
            <div class="flex flex-col gap-3">
              <div class="w-28 max-h-16">
                <img
                  loading="lazy"
                  src="https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/239/79a5eab5-4a2c-4bf5-a424-ff6f141a430c"
                  alt="O estilo pensado para você"
                  width="200"
                  height="200"
                  data-fresh-disable-lock="true"
                  srcset="
                    /live/invoke/website/loaders/image.ts?src=https%3A%2F%2Fozksgdmyrqcxcwhnbepg.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fassets%2F239%2F79a5eab5-4a2c-4bf5-a424-ff6f141a430c&amp;fit=cover&amp;width=200&amp;height=200 200w,
                    /live/invoke/website/loaders/image.ts?src=https%3A%2F%2Fozksgdmyrqcxcwhnbepg.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fassets%2F239%2F79a5eab5-4a2c-4bf5-a424-ff6f141a430c&amp;fit=cover&amp;width=400&amp;height=400 400w
                  "
                />
              </div>
              <div>O estilo pensado para você</div>
            </div>
            <div style="width: 90px; height: 20px">
              <a
                href="https://deco.cx/"
                target="_blank"
                aria-label="Powered by deco.cx"
                style="display: flex"
                ><svg
                  style="width: auto; height: auto"
                  width="900"
                  height="200"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 90 20"
                  fill="currentColor"
                >
                  <path
                    d="M84.5057 13.1474C85.709 15.6332 87.0576 17.8871 88.3836 19.7802L88.3548 19.8939C86.7652 20.0364 85.2028 20.0364 83.6132 19.8939C82.9373 18.845 82.2054 17.3566 81.6492 15.9303L78.5866 19.8939C77.1106 20.0364 75.2649 20.0364 73.901 19.8939L79.7292 12.8791C78.726 11.1179 77.7774 9.14136 77.1091 6.51764C78.5002 6.37516 79.9202 6.37516 81.3113 6.51764C81.6704 7.86057 82.1114 9.18228 82.5812 10.501L85.6544 6.51764C87.1031 6.34788 88.6079 6.34788 89.9414 6.51764L84.5012 13.1474H84.5057ZM19.5501 4.72757C19.9759 4.87004 20.2032 4.61389 20.0047 4.21677L18.0741 0.269816C17.9316 -0.0136243 17.6195 -0.0424231 17.421 0.0424576L12.6232 1.85981C12.2262 2.00229 12.2535 2.37061 12.652 2.48429L14.0719 2.93901C12.9081 5.5794 11.4594 9.55667 10.2956 12.0546C8.98932 14.8375 8.33619 16.7973 6.12221 16.7973C3.90822 16.7973 3.53847 15.0648 4.47498 12.5942C5.55393 9.72643 7.37089 8.87459 9.44394 9.47027C10.0122 8.67452 10.438 7.48164 10.6078 6.40244C10.0122 6.23268 9.30149 6.17508 8.70595 6.17508C5.35542 6.17508 2.03368 7.90756 0.67135 11.5423C-1.06074 16.2289 0.557696 19.8924 5.69638 19.8924C9.47273 19.8924 11.6019 18.1599 14.1007 12.8488C15.4631 9.92347 16.6284 7.05572 17.9619 4.21525L19.5516 4.72605L19.5501 4.72757ZM29.5441 11.1739C28.6076 13.6158 25.7389 14.6101 20.2305 14.4676C20.2017 16.1152 21.3094 16.7685 23.3249 16.7685C24.6872 16.7685 26.192 16.4563 27.271 15.9167C27.5832 16.8822 27.6119 17.8189 27.3271 18.7571C25.6238 19.609 23.5795 19.8924 22.1308 19.8924C16.395 19.8924 15.657 15.6044 16.8209 12.2531C17.9286 9.10043 20.9382 6.17508 25.0267 6.17508C28.8591 6.17508 30.4775 8.70331 29.541 11.1739H29.5441ZM24.4327 9.04435C22.8703 9.04435 21.6792 10.0387 20.9124 11.7423C24.319 11.7423 25.4843 11.2315 25.8238 10.407C26.0511 9.81131 25.8238 9.04435 24.4327 9.04435ZM40.0487 9.35659C40.7307 9.35659 41.4111 9.47027 41.8369 9.72643C42.5749 8.73211 43.0007 7.7378 43.0856 6.7162C42.4612 6.43276 41.4111 6.1766 40.076 6.1766C35.6465 6.1766 32.1551 8.76091 30.9049 12.3395C29.7123 15.7196 30.6215 19.8939 36.1572 19.8939C37.6332 19.8939 39.138 19.5817 40.1897 19.127C40.5306 18.1038 40.5594 17.111 40.2745 16.1167C39.5653 16.4002 38.5425 16.6851 37.4923 16.6851C34.6524 16.6851 34.3979 14.5843 34.9934 12.7943C35.6465 10.892 37.3498 9.35811 40.0472 9.35811L40.0487 9.35659ZM59.4973 15.2922C57.8227 15.2922 56.8574 16.3426 56.5165 17.3657C56.1195 18.6146 56.6301 19.9212 58.532 19.9212C60.1504 19.9212 61.1445 18.9269 61.4854 17.8765C61.8552 16.6836 61.4567 15.2922 59.4973 15.2922ZM56.5726 14.0705C55.2375 17.8189 51.887 19.8924 48.1394 19.8924C43.0007 19.8924 41.552 15.9167 42.8871 12.1107C44.0797 8.7306 47.2029 6.17508 51.2914 6.17508C56.4028 6.17508 57.9637 10.122 56.5726 14.0705ZM50.6671 9.27171C48.7653 9.27171 47.4878 11.0042 46.9483 12.6518C46.2664 14.7253 46.6361 16.8549 48.7941 16.8549C50.6398 16.8549 51.9173 15.2361 52.4855 13.5324C53.1387 11.5438 52.9114 9.27323 50.6686 9.27323L50.6671 9.27171ZM70.0125 16.6836C67.1727 16.6836 66.9181 14.5828 67.5137 12.7927C68.1668 10.8905 69.8701 9.35659 72.5675 9.35659C73.2494 9.35659 73.9298 9.47027 74.3557 9.72643C75.0936 8.73211 75.5195 7.7378 75.6043 6.7162C74.98 6.43276 73.9298 6.1766 72.5948 6.1766C68.1653 6.1766 64.6738 8.76091 63.4236 12.3395C62.231 15.7196 63.1403 19.8939 68.676 19.8939C70.152 19.8939 71.6567 19.5817 72.7084 19.127C73.0494 18.1038 73.0782 17.111 72.7933 16.1167C72.0841 16.4002 71.0612 16.6851 70.011 16.6851L70.0125 16.6836Z"
                  ></path></svg
              ></a>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full flex items-center justify-center">
        <a href="#top" class="btn"
          >Voltar ao topo
          <svg width="24" height="24" stroke-width="16">
            <use
              href="/sprites.svg?__frsh_c=23d7a5fd9627e01d1ed21d67f4a41eeb2440812a#ChevronUp"
            ></use></svg
        ></a>
      </div>
    </footer>
  </section>
  <script type="module" nonce="">
    (() =>
      addEventListener(
        "load",
        () =>
          navigator &&
          navigator.serviceWorker &&
          navigator.serviceWorker.register("/sw.js")
      ))();
  </script>
  <script
    id="__FRSH_STATE_ba9c7aad-7d6c-42f3-92e1-1719e095ac4b"
    type="application/json"
    nonce=""
  >
    {
      "v": [
        [
          {
            "menu": {
              "items": [
                {
                  "url": "/feminino",
                  "name": "Feminino",
                  "@type": "SiteNavigationElement",
                  "image": [
                    {
                      "url": "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/239/7733d479-0fd1-4f33-bed9-6f9e170655d6",
                      "@type": "ImageObject"
                    }
                  ],
                  "children": [
                    {
                      "url": "/feminino/saias",
                      "name": "Novidades",
                      "@type": "SiteNavigationElement",
                      "children": [
                        {
                          "url": "/feminino/vestidos",
                          "name": "Mais vendidos",
                          "@type": "SiteNavigationElement"
                        },
                        {
                          "url": "/feminino/vestidos",
                          "name": "Parcerias",
                          "@type": "SiteNavigationElement"
                        }
                      ]
                    }
                  ]
                },
                {
                  "url": "/masculino",
                  "name": "Masculino",
                  "@type": "SiteNavigationElement",
                  "image": [
                    {
                      "url": "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/239/575c3b0f-1a2e-4ecb-aaad-532671dc553d",
                      "@type": "ImageObject"
                    }
                  ],
                  "children": [
                    {
                      "url": "/masculino",
                      "name": "Novidades",
                      "@type": "SiteNavigationElement",
                      "children": [
                        {
                          "url": "/masculino",
                          "name": "Mais vendidos",
                          "@type": "SiteNavigationElement"
                        },
                        {
                          "url": "/masculino",
                          "name": "Parcerias",
                          "@type": "SiteNavigationElement"
                        }
                      ]
                    }
                  ]
                },
                {
                  "url": "/sale",
                  "name": "Sale",
                  "@type": "SiteNavigationElement",
                  "image": [
                    {
                      "url": "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/239/5e9310c0-c725-4643-ade3-f92a505bd1d6",
                      "@type": "ImageObject"
                    }
                  ],
                  "children": [
                    {
                      "url": "/feminino",
                      "name": "Feminino",
                      "@type": "SiteNavigationElement",
                      "children": [
                        {
                          "url": "/feminino",
                          "name": "Camisetas",
                          "@type": "SiteNavigationElement"
                        },
                        {
                          "url": "/feminino",
                          "name": "Camisas",
                          "@type": "SiteNavigationElement"
                        }
                      ]
                    },
                    {
                      "url": "/masculino",
                      "name": "Masculino",
                      "@type": "SiteNavigationElement",
                      "children": [
                        {
                          "url": "/masculino",
                          "name": "Camisetas",
                          "@type": "SiteNavigationElement"
                        },
                        {
                          "url": "/masculino",
                          "name": "Regatas",
                          "@type": "SiteNavigationElement"
                        }
                      ]
                    }
                  ]
                },
                {
                  "url": "/linktree",
                  "name": "Link Tree",
                  "@type": "SiteNavigationElement"
                }
              ]
            },
            "searchbar": {
              "name": "q",
              "action": "/s",
              "loader": {
                "count": 4,
                "__resolveType": "vtex/loaders/intelligentSearch/suggestions.ts"
              },
              "placeholder": "What are you looking for?"
            },
            "platform": "vtex",
            "children": null
          },
          {},
          {
            "searchbar": {
              "name": "q",
              "action": "/s",
              "loader": 0,
              "placeholder": "What are you looking for?",
              "platform": "vtex"
            }
          },
          {},
          {},
          { "searchbar": 0 },
          {},
          {
            "content": {
              "form": {
                "helpText": "\u003cp\u003eAo se inscrever, você está aceitando nossa \u003ca href=\"/\" class=\"link\"\u003ePolítica de Privacidade\u003c/a\u003e.\u003c/p\u003e"
              },
              "title": "Assine nossa newsletter",
              "description": "Participe e ganhe 10% de desconto na primeira compra"
            },
            "layout": { "tiled": true }
          }
        ],
        []
      ],
      "r": [
        [
          ["0", "0", "searchbar", "loader"],
          ["0", "2", "searchbar", "loader"]
        ],
        [
          ["0", "2", "searchbar"],
          ["0", "5", "searchbar"]
        ]
      ]
    }
  </script>
  <script type="module" nonce="">
    import { deserialize } from "/_frsh/js/23d7a5fd9627e01d1ed21d67f4a41eeb2440812a/deserializer.js";
    const ST = document.getElementById(
      "__FRSH_STATE_ba9c7aad-7d6c-42f3-92e1-1719e095ac4b"
    ).textContent;
    const STATE = deserialize(ST);
    import { revive } from "/_frsh/js/23d7a5fd9627e01d1ed21d67f4a41eeb2440812a/main.js";
    import header_drawers_default from "/_frsh/js/23d7a5fd9627e01d1ed21d67f4a41eeb2440812a/island-header_drawers.js";
    import { SearchButton as header_buttons_SearchButton } from "/_frsh/js/23d7a5fd9627e01d1ed21d67f4a41eeb2440812a/island-header_buttons.js";
    import header_searchbar_default from "/_frsh/js/23d7a5fd9627e01d1ed21d67f4a41eeb2440812a/island-header_searchbar.js";
    import header_cart_vtex_default from "/_frsh/js/23d7a5fd9627e01d1ed21d67f4a41eeb2440812a/island-header_cart_vtex.js";
    import newsletter_default from "/_frsh/js/23d7a5fd9627e01d1ed21d67f4a41eeb2440812a/island-newsletter.js";
    const propsArr = typeof STATE !== "undefined" ? STATE[0] : [];
    revive(
      {
        header_drawers_default: header_drawers_default,
        header_buttons_searchbutton: header_buttons_SearchButton,
        header_searchbar_default: header_searchbar_default,
        header_cart_vtex_default: header_cart_vtex_default,
        newsletter_default: newsletter_default,
      },
      propsArr
    );
  </script>
</body>
<rq-implicit-test-rule-widget
  class="rq-element"
  style="display: none"
  draggable="true"
></rq-implicit-test-rule-widget>
</html>
`;
// Set up the options to control the load
export let options = {
  vus: 20, // Number of Virtual Users
  duration: "5s", // Duration of the test
};

export default function () {
  // Send a POST request
  const res = http.post("https://candy--candystart.deco.site/live/_echo", data);

  // Check that the request was successful
  check(res, { "success req": (r) => r.status === 200 });

  // Introduce a small sleep to slightly stagger requests
  sleep(0.1);
}
