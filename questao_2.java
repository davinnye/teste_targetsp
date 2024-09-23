import java.util.HashSet;
import java.util.Scanner;

public class questao_2 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Digite um número inteiro: ");
        int number = scanner.nextInt();

        HashSet<Integer> fibSet = new HashSet<>();
        //utilizarei de um HashSet para armazenar o número informado seja alcançado ou ultrapassado
        //acelerando assim a verificação.
        
        int a = 0, b = 1;

        while (a <= number) {
            fibSet.add(a);
            int next = a + b;
            a = b;
            b = next;
        }

        if (fibSet.contains(number)){
            System.out.println(number + " pertence à sequência.");
        } else {
            System.out.println(number + " não pertence à sequência.");
        }

    }
}