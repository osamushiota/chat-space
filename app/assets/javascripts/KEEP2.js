

// let image = message.image ? ｀<img class='' src='${message.image}' >｀ : ‘’;
// let html =  ｀<div class='chat' data-id=｀ + message.id + `>
//               <div class=‘chat__upbox’>
//                 <p class=‘chat__upbox__user’>
//                   ${message.user_name}
//                 </p>
//                 <p class=‘chat__upbox__time’>
//                   ${message.created_at}
//                 </p>
//               </div>
//               <p class=‘chat__text’>
//                 ${message.content}
//               </p>
//               ${image}
//             </div>`
// return html;
// }
 
//  //   last_message.content?
//   //   　'画像投稿'
//   //    else
//   //     ''
//   //   end

//     message.image? console.log('input-box__image__file'):console.log("");
//     var html = `<p>
//                   <strong>
//                     <a href=/users/${message.user_id}>${message.user_name}</a>
                  
//                   </strong>
//                   ${message}
//                 </p>`
//                 `<div class="message">
//                 <div class="upper-message">
//                 <div class="upper-message__user-name">
//                 sam
//                 </div>
//                 <div class="upper-message__date">
//                 2019/11/14 10:29
//                 </div>
//                 </div>
//                 <div class="lower-message">
//                 <p class="lower-message__content">
//                 jhgfdl;hklhjkjkhf
//                 </p>
                
//                 </div>
//                 </div>`

//                 `<div class="message">
//                 <div class="upper-message">
//                 <div class="upper-message__user-name">
//                 sam
//                 </div>
//                 <div class="upper-message__date">
//                 2019/11/14 12:11
//                 </div>
//                 </div>
//                 <div class="lower-message">
//                 <img class="lower-message__image" src="/uploads/message/image/54/%E9%9D%9E%E5%90%8C%E6%9C%9F%E3%81%AE%E6%B5%81%E3%82%8C.jpg" alt="%e9%9d%9e%e5%90%8c%e6%9c%9f%e3%81%ae%e6%b5%81%e3%82%8c">
//                 </div>
//                 </div>`

//                 $('#new_message').on('submit', function(e){
//                   e.preventDefault();
//                   // console.log("ok");
//                   var formData = new FormData(this);
//                   var url = $(this).attr('action')
//                   $.ajax({
//                     url: url,
//                     type: "POST",
//                     data: formData,
//                     dataType: 'json',
//                     processData: false,
//                     contentType: false
//                   })
//                   .done(function(data){
//                     var html = buildHTML(data);
//                     $('.message').append(html);
//                     $('.new_message').val('');
//                     $('.form__submit').prop('disabled', false);
//                   })
//                 })
              