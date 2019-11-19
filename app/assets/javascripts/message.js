$(function(){
  function buildHTML(message){
    let image = ( message.image ) ? `<img class= "lower-message__image" src=${message.image} >` : "";
    let html = `<div class="message", "data-message-id": "#{message.id}">
                  <div class="upper-message">
                    <div class="upper-message__user-name">
                    ${message.user_name}
                    </div>
                    <div class="upper-message__date">
                    ${message.created_at}
                    </div>
                  </div>
                  <div class="lower-message">
                    <p class="lower-message__content">
                    ${message.content}
                    </p>
                    ${image}
                  </div>
                </div>`
  $('.messages').append(html);
}

  $('#new_message').on('submit', function(e){
    e.preventDefault();
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

  let reloadMessages = function () {
    if (window.location.href.match(/\/groups\/\d+\/messages/)){      
      let last_message_id = $('.message:last').data("message-id");   

      $.ajax({
        url: "api/messages", 
        type: 'get',
        dataType: 'json',
        data: {last_id: last_message_id} 
      })

      .done(function (messages) { 
        let insertHTML = '';
        messages.forEach(function (message) {
          insertHTML = buildHTML(message); 
          $('.messages').append(insertHTML);
        })
        $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight}, 'fast');
      })
      .fail(function () {
        alert('自動更新に失敗しました');
      });
    }
  };
  setInterval(reloadMessages, 5000);
});



