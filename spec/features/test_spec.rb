feature 'index page' do
  scenario 'index page has hello world content' do
    visit '/test'

    expect(page).to have_content("hello world")
  end
end