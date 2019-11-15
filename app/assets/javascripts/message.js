$(function(){
  function buildHTML(message){
    let image = message.image ? `<img class='' src='${message.image}' >` : '';
    let html = `<div class="message" data-id=` + message.id + `>
                 <div class="upper-message">
                  <p class="upper-message__user-name">
                    ${message.user_name}
                  </p>
                  <p class="upper-message__date">
                    ${message.created_at}
                  </p>
                </div>
                <p class="lower-message__content">
                  ${message.content}
                </p>
                ${image}
              </div>`
  return html;
}

  $('#new_message').on('submit', function(e){
    e.preventDefault();
    // console.log("ok");
    var formData = new FormData(this);
    var url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })

    .done(function(data) {
      let html = buildHTML(data);
      $('.messages').append(html);
      $(function() {
        $('.messages').animate({
          scrollTop: $('.messages')[0].scrollHeight
          }); 
        });
      $('#new_message')[0].reset();
      $('.form__submit').prop('disabled', false);
    })
    .fail(function() {
      alert("メッセージ送信に失敗しました");
    });
  })
})