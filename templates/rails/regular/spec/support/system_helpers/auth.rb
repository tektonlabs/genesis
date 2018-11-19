module SystemHelpers
  def sign_in_with(email, password)
    email = email || ""
    password = password || ""
    visit "/users/sign_in"
    within(".form-signin") do
      fill_in 'user[email]', with: email
      fill_in 'user[password]', with: password
    end
    click_button 'Log in'
  end

  def log_out
    find('a[href="/tektonlabs/users/sign_out"]').click
    expect(page).to have_content 'Tienes que iniciar sesión o registrarte para poder continuar.'
  end
end