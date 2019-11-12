//クラス名やID名はご自身のビューファイルに合わせて改変する必要があります。
  -# .form
  -#   %form.new_message
  -#     %p.new_message_input_box
  -#       .input-box
  -#       %input.new_message__input-box__text{placeholder: "type a message", type: "text"}
  -#         %label.new_message__input-box__image{for: "message_image"}
  -#           %i.fa.fa-image
  -#             %input.new_message__input-box__image__file{type: "file"}
  -#       %input.input-box__submit-btn{type: "submit", value: "Send"}

  -# .form
  -#     = form_for [@group, @message] do |f|
  -#       = f.text_field :content, class: 'form__message', placeholder: 'type a message'
  -#       .form__mask
  -#         = f.label :image, class: 'form__mask__image' do
  -#           = icon('fas', 'image', class: 'icon')
  -#           = f.file_field :image, class: 'hidden'
  -#       = f.submit 'Send', class: 'form__submit'
  