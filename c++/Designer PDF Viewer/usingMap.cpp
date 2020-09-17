// https://www.hackerrank.com/challenges/designer-pdf-viewer/problem

int designerPdfViewer(vector<int> h, string word) {

    std::map<char, int> words;

    char albhabet[26] = {'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'}; 
    for(char i{}; i< h.size(); i++){
        words[albhabet[i]] =  h[i];
    }

    int max =0;
    for(int i =0; i<word.length(); i++){
        int value = words.find(word[i])->second;
        if(value > max){
            max = value;
        }
    }

    return max * word.length();

}