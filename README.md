camel case: camelCase

snake case: snake-case

pascal case: PascalCase

sematic html

destructuring

props

onClick
onKeyDown
onKeyUp
onMouseHover
onMouseOver
onChange
onSelect
onKeyPress

https://www.mockaroo.com/
https://fontawesome.com/icons/star?f=classic&s=solid&pc=%23f8b90d
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

Next picture
Active tab

https://dev.to/themodernweb/how-to-create-music-player-with-pure-html-css-js-c1j

yarn add node-sass

SCSS - SASS

BEM - cách đặt tên class

inherit - initial - unset

Độ ưu tiên của css selector

style inline, internal css, external css

useMemo
useCallback
useRef
useForwardFef

dynamic import
lazy loading
code spliting

regular expression


Đăng nhập bằng các account
nv01@gmail.com
nv02@gmail.com
nv03@gmail.com
nv04@gmail.com

password 123456

https://codepen.io/its_abhay/pen/abQpKGa
https://jsonplaceholder.typicode.com/users/1
https://transform.tools/html-to-jsx
https://getbootstrap.com/docs/4.3/components/spinners/

1. Login thành công => token + refresh token
2. Lưu token + refresh token (để khi có request gửi lên server không cần đăng nhập mật khẩu
nếu token hết hạn sẽ dùng refresh token để tạo một token mới) vào local storage
3. trong App.js kiểm tra có token chưa bằng cách localStogare.getItem("name")
nếu có => đã login => gọi api lấy thông tin user (getMyProfile)
nếu không => chưa login => yêu cầu đăng nhập



Trong Redux Saga, `yield all`, `fork`, `takeLeading` và `takeEvery` là những effect và công cụ quan trọng để quản lý quá trình xử lý các action trong ứng dụng. Dưới đây là giải thích về mỗi khái niệm:

1. `yield all`: `yield all` là một effect trong Redux Saga, được sử dụng để chạy đồng thời một mảng các effect. Nó giúp bạn chạy nhiều effect cùng một lúc mà không chờ đợi từng effect hoàn thành trước khi chạy effect tiếp theo.

```javascript
import { all, call } from 'redux-saga/effects';

function* mainSaga() {
  yield all([
    call(saga1),
    call(saga2),
    call(saga3),
  ]);
}
```

2. `fork`: `fork` là một effect trong Redux Saga, được sử dụng để tạo một "tác tử" (task) mới để chạy một saga riêng biệt. Nó cho phép các saga chạy đồng thời và độc lập với nhau.

```javascript
import { fork } from 'redux-saga/effects';

function* mainSaga() {
  yield fork(saga1);
  yield fork(saga2);
  yield fork(saga3);
}
```

3. `takeLeading`: `takeLeading` là một helper trong Redux Saga, được sử dụng để theo dõi một action và chỉ chạy saga liên quan đến action đầu tiên mà nó gặp.

```javascript
import { takeLeading } from 'redux-saga/effects';

function* mainSaga() {
  yield takeLeading('FETCH_DATA', fetchDataSaga);
}
```

Trong ví dụ trên, `fetchDataSaga` chỉ được chạy khi action `'FETCH_DATA'` đầu tiên xuất hiện. Nếu có các action `'FETCH_DATA'` khác được gọi trong khi `fetchDataSaga` đang chạy, chúng sẽ bị bỏ qua.

4. `takeEvery`: `takeEvery` là một helper trong Redux Saga, được sử dụng để theo dõi một action và chạy saga liên quan mỗi khi action đó được gọi.

```javascript
import { takeEvery } from 'redux-saga/effects';

function* mainSaga() {
  yield takeEvery('FETCH_DATA', fetchDataSaga);
}
```

Trong ví dụ trên, mỗi khi có một action `'FETCH_DATA'` được gọi, `fetchDataSaga` sẽ được chạy. Không quan trọng liệu `fetchDataSaga` có đang chạy hay không, nó sẽ được gọi mỗi khi có một action phù hợp.

Các công cụ và effect trên giúp bạn xử lý luồng logic phức tạp trong Redux Saga. Bằng cách kết hợp chúng, bạn có thể quản lý quá trình xử lý các action, tạo các tác tử độc lập, và điều khiển luồng thực thi của các saga.