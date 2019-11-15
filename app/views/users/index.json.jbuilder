json.array! @users do |user|
  json.id user.id
  json.name user.name
  # json.content user.content
  # json.image user.image.url
  # json.user_name  user.name
  # json.created_at user_name.created_at.strftime("%Y/%m/%d %H:%M")
  # json.group_id  user.group.id
  # json.group user.group
end
