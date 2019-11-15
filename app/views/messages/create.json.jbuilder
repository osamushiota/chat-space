json.content @message.content
json.image @message.image.url
json.user_name  @message.user.name
json.created_at @message.created_at.strftime("%Y/%m/%d %H:%M")
json.group_id  @group.id
json.id @message.id
# json.name  @message.user.name
# json.group @group_users
# json.group @group
# json.message  @messages.message
# json.user_id  @current.user.id
# json.group_users  @current.user.id

